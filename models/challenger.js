let mongoose = require("mongoose");

let challengerSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    name: {
        type: String
    },
    senderPSID: {
        type: Number,
        required: true,
        unique: true
    },
    fbAccessToken: {
        type: Number,
        unique: true
    },
    fbSignedRequest: {
        type: String,
        unique: true
    },
    fbUserId: {
        type: Number,
        unique: true
    },
    phoneNumber: {
        type: String,
    },
    acceptedChallenge: {
        type: Boolean,
        default: false
    },
    postedChallengeAccepted: {
        type: Boolean,
        default: false
    },
    registeredToVote: {
        type: Boolean,
        default: false
    },
    postedRegisteredToVote: {
        type: Boolean,
        default: false
    },
    voted: {
        type: Boolean,
        default: false
    },
    postedVoted: {
        type: Boolean,
        default: false
    },
    sixChosen: {
        type: Boolean,
        default: false
    },
    sixRegistered: {
        type: Boolean,
        default: false
    },
    postedSixRegistered: {
        type: Boolean,
        default: false
    },
    sixVoted: {
        type: Boolean,
        default: false
    },
    postedSixVoted: {
        type: Boolean,
        default: false
    },
    challengedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Challenger'
    },
    referralUrl: {
        type: String
    }
});

let Challenger = mongoose.model('Challenger', challengerSchema);
module.exports = Challenger;