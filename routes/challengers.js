let express = require('express');
let router = express.Router();
let db = require("./../models");
var helpersChallengers = require("./../helpers/helpers_challengers");

router.route("/")
    .get(helpersChallengers.getChallengers)
    .post(helpersChallengers.createChallenger)

router.route("/:challengerId")
    .get(helpersChallengers.getAttachmentsByChallenger)
    // .get(helpersChallengers.getChallenged)
    .get(helpersChallengers.getChallengedBy)
    .get(helpersChallengers.getChallenger)
    .put(helpersChallengers.updateChallenger)
    .delete(helpersChallengers.deleteChallenger)

router.route("/fbUserId/:fbUserId")
    .get(helpersChallengers.getChallenerByfbUserId)

router.route("/senderPsid/:senderPSID")
    .get(helpersChallengers.getChallengerBySenderPsid)

module.exports = router;
    