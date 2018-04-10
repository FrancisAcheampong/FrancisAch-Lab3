const mongoose = require('mongoose');
const Course = mongoose.model('Course');
//
function getErrorMessage(err) {
    if (err.errors) {
        for (let errName in err.errors) {
            if (err.errors[errName].message) return err.errors[errName].
                message;
        }
    } else {
        return 'Unknown server error';
    }
};
//
exports.create = function (req, res) {
    const course = new Course(req.body);
    course.creator = req.user;
    course.save((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(course);
        }
    });
};
//
exports.list = function (req, res) {
    Course.find().sort('-created').populate('creator', 'firstName lastName fullName').exec((err, courses) => {
if (err) {
        return res.status(400).send({
            message: getErrorMessage(err)
        });
    } else {
        res.status(200).json(articles);
    }
});
};
//
exports.courseByID = function (req, res, next, id) {
    Course.findById(id).populate('creator', 'firstName lastName fullName').exec((err, course) => {
        if (err) return next(err);
        if (!course) return next(new Error('Failed to load course '
        + id));
    req.article = article;
    next();
});
};
//
exports.read = function (req, res) {
    res.status(200).json(req.article);
};
//
exports.update = function (req, res) {
    const article = req.article;
    article.title = req.body.title;
    article.content = req.body.content;
    article.save((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(article);
        }
    });
};
//
exports.delete = function (req, res) {
    const article = req.article;
    article.remove((err) => {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.status(200).json(article);
        }
    });
};
//The hasAuthorization() middleware uses the req.article and req.user objects
//to verify that the current user is the creator of the current article
exports.hasAuthorization = function (req, res, next) {
    if (req.article.creator.id !== req.user.id) {
        return res.status(403).send({
            message: 'User is not authorized'
        });
    }
    next();
};


