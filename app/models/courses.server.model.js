//load Model dependencies

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new mongoose.Schema({
    code: {
        type: String,
        required: 'Code is required',
    },
    name: {
        type: String,
        required: 'Name is required',
    },
    section: {
        type: String,
        required: 'Section number is required',
        validate: {
            validator: val => !isNaN(val) && val > 0,
            msg: 'Section number is invalid'
        }
    },
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }]
});

mongoose.model('Course', CourseSchema);
