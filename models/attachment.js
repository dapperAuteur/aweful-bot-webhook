let mongoose = require("mongoose");

let attachmentSchema = new mongoose.Schema({
    attachmentUrl: {
        type: String,
        required: true
    },
    senderPSID: {
        type: Number,
        required: true
    },
    challengerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Challenger',
        required: true
    }
}, {
    timestamps: true
});

let Attachment = mongoose.model('Attachment', attachmentSchema);
module.exports = Attachment;