let express = require('express');
let router = express.Router();
let db = require("./../models");
let helpersAttachments = require("./../helpers/helpers_attachments");

router.route('/')
    .get(helpersAttachments.getAttachments)
    .post(helpersAttachments.createAttachment)

router.route('/:attachmentId')
    .get(helpersAttachments.getAttachment)
    .put(helpersAttachments.updateAttachment)
    .delete(helpersAttachments.deleteAttachment)

module.exports = router;