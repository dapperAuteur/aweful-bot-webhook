let db = require('./../models');

exports.getAttachments = function (req, res) {
    try {
        db.Attachment.find()
            .then(function (attachments) {
                res.json(attachments);
            })
    } catch (error) {
        res.send(error);
    }
}

exports.createAttachment = function (req, res) {
    try {
        db.Attachment.create(req.body)
            .then(function (newAttachment) {
                res.status(201).json(newAttachment);
            })
    } catch (error) {
        res.send(error);
    }
}

exports.getAttachment = function (req, res) {
    try {
        db.Attachment.findById(req,params.attachmentId)
            .then(function (foundAttachment) {
                res.json(foundAttachment);
            })
    } catch (error) {
        res.send(error);
    }
}

exports.updateAttachment = function (req, res) {
    try {
        db.Attachment.findByIdAndUpdate({ _id: req.params.attachmentId }, req.body, {new: true })
            .then(function (updatedAttachment) {
                res.json(updatedAttachment);
            })
    } catch (error) {
        res.send(error);
    }
}

exports.deleteAttachment = function (req, res) {
    try {
        db.Attachment.remove({ _id: req.params.attachmentId })
            .then(function () {
                res.json({
                    message: `Attachment ${req.params.attachmentId} deleted`,
                    attachmentId: req.params.attachmentId
                });
            })
    } catch (error) {
        res.send(error);
    }
}

module.exports = exports;