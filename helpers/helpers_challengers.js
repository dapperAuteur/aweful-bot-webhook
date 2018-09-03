let db = require('./../models');

exports.getChallengers = function (req, res) {
    try {
        db.Challenger.find()
            .then(function (challengers) {
                res.json(challengers);
            })
    } catch (error) {
        console.log(error);
    }
}

exports.createChallenger = function (req, res) {
    try {
        console.log(req.body);
        db.Challenger.create(req.body)
            .then(function (newChallenger) {
                console.log(res);
                res.status(201).json(newChallenger);
            })
    } catch (error) {
        res.send(error);
    }
}

exports.getAttachmentsByChallenger = function (req, res) {
    try {
        db.Attachment.find({ challengerId: req.params.challengerId })
            .then(function (foundAttachments) {
                res.json(foundAttachments);
            })
    } catch (error) {
        res.send(error);
    }
}

// exports.getChallenged = function (req, res) {
//     try {
//         db.Challenger.find({ challengedBy: req.params.challengedBy })
//             .then(function (foundChallenged) {
//                 res.json(foundChallenged);
//             })
//     } catch (error) {
//         res.send(error);
//     }
// }

exports.getChallengedBy = function (req, res) {
    try {
        db.Challenger.find({ challengedById: req.params.challengedById })
            .then(function (foundChallenged) {
                res.json(foundChallenged);
            })
    } catch (error) {
        res.send(error);
    }
}

exports.getChallenger = function (req, res) {
    try {
        db.Challenger.findById(req.params.challengerId)
        .then(function (foundChallenger) {
            res.json(foundChallenger);
        })
    } catch (error) {
        res.send(error);
    }
}

exports.updateChallenger = function (req, res) {
    try {
        db.Challenger.findOneAndUpdate({ _id: req.params.challengerId }, req.body, { new: true })
            .then(function (updatedChallenger) {
                res.json(updatedChallenger);
            })
    } catch (error) {
        res.send(error);
    }
}

exports.deleteChallenger = function (req, res) {
    try {
        db.Challenger.remove({ _id: req.params.challengerId })
            .then(function () {
                res.json({
                    message: `Challenger ${req.params.challengerId} deleted`,
                    challengerId: req.params.challengerId
                });
            })
    } catch (error) {
        res.send(error);
    }
}

exports.getChallenerByfbUserId = function (req, res) {
    try {
        db.Challenger.find({ fbUserId: req.params.fbUserId })
            .then(function (foundChallenger) {
                res.send(foundChallenger);
            })
    } catch (error) {
        res.send(error);
    }
}

exports.getChallengerBySenderPsid = function (req, res) {
    try {
        db.Challenger.find({ senderPSID: req.params.senderPSID })
            .then(function (foundChallenger) {
                res.json(foundChallenger);
            })
    } catch (error) {
        res.send(error);
    }
}

module.exports = exports;