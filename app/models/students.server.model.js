//Load the module dependencies 
const mongoose = require('mongoose');
const crypto = require('crypto');
const Schema = mongoose.Schema;

//defining the student schema

const StudentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: 'First name is required',
    },
    lastName: {
        type: String,
        required: 'Last name is required',
    },
    email: {
        type: String,
        match: [/.+@.+\..+/, 'Please fill a valid email address'],
        unique: true
    },
    username: {
        type: String,
        unique: true,
        required: 'Student number is required',
        trim: true
    },
    address: {
        type: String,
        required: 'Address is required',
    },
    city: {
        type: String,
        required: 'City is required',
    },
    phone: {
        type: String,
        required: 'Phone number is required',
    },
    program: {
        type: String,
        required: 'Program name is required',
    },
    password: {
        type: String,
        required: 'Password is required',
        validate: [
            password => password && password.length >= 6,
            'Password should be longer'
        ]
    },
    salt: String,
    courses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: CourseModelName
    }]
});

// Set the 'fullname' virtual property
StudentSchema.virtual('fullName').get(function () {
    return this.firstName + ' ' + this.lastName;
}).set(function (fullName) {
    const splitName = fullName.split(' ');
    this.firstName = splitName[0] || '';
    this.lastName = splitName[1] || '';
});

// Use a pre-save middleware to hash the password
StudentSchema.pre('save', function (next) {
    if (this.password) {
        this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
        this.password = this.hashPassword(this.password);
    }

    next();
});

// Create an instance method for hashing a password
StudentSchema.methods.hashPassword = function (password) {
    //digest parameter required in version 9 of Node.js
    return crypto.pbkdf2Sync(password, this.salt, 10000, 64, 'sha512').toString('base64');
};

// Create an instance method for authenticating user
StudentSchema.methods.authenticate = function (password) {
    return this.password === this.hashPassword(password);
};

// Find possible not used username
StudentSchema.statics.findUniqueUsername = function (username, suffix, callback) {
    // Add a 'username' suffix
    const possibleUsername = username + (suffix || '');

    // Use the 'User' model 'findOne' method to find an available unique username
    this.findOne({
        username: possibleUsername
    }, (err, user) => {
        // If an error occurs call the callback with a null value, otherwise find find an available unique username
        if (!err) {
            // If an available unique username was found call the callback method, otherwise call the 'findUniqueUsername' method again with a new suffix
            if (!user) {
                callback(possibleUsername);
            } else {
                return this.findUniqueUsername(username, (suffix || 0) + 1, callback);
            }
        } else {
            callback(null);
        }
    });
};

// Configure the 'UserSchema' to use getters and virtuals when transforming to JSON
StudentSchema.set('toJSON', {
    getters: true,
    virtuals: true
});

// Create the 'User' model out of the 'UserSchema'
mongoose.model('Student', StudentSchema);
