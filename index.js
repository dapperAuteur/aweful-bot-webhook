'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request');
const app = express().use(bodyParser.json());
const API_URL = "https://lit-anchorage-94924.herokuapp.com/api/ver0001";
// import CRUD functions
let challenger;
let attachment;

let db = require("./models");
let challengerRoutes = require("./routes/challengers");
let attachmentRoutes = require("./routes/attachments");
// const cors = require('cors');

// app.use(cors());

app.use(express.static(__dirname + '/views/assets/css'));
app.use(express.static(__dirname + '/views'));

app.get('/', function (req, res) {
    res.sendFile("index.html");
});

app.get('/api/ver0001/challengers', challengerRoutes);
app.get('/api/ver0001/challengers/:challengerId', challengerRoutes);
app.get('/api/ver0001/challengers/attachments/:attachments', challengerRoutes);
app.get('/api/ver0001/challengers/challengedBy/:challengerId', challengerRoutes);
app.get('/api/ver0001/challengers/fbUser/:fbUserId', challengerRoutes);
app.get('/api/ver0001/challengers/senderPsid/:senderPSID', challengerRoutes);
app.post('/api/ver0001/challengers', challengerRoutes);
app.put('/api/ver0001/challengers/:challengerId', challengerRoutes);
app.delete('/app/ver0001/challengers/:challengerId', challengerRoutes);
app.use('/api/ver0001/challengers', challengerRoutes);

app.get('./api/ver001/attachments', attachmentRoutes);
app.get('./api/ver001/attachments/:attachmentId', attachmentRoutes);
app.post('/api/ver0001/attachments', attachmentRoutes);
app.put('/api/ver0001/attachments/:attachmentId', attachmentRoutes);
app.delete('/api/ver0001/attachments/:attachmentId', attachmentRoutes);
app.use('/api/ver0001/attachments/', attachmentRoutes);

const responses = require('./responses');

let {
    // default
    default_response,
    // step 1
    get_started_step_1,
    done_registered_in_person_1G,
    i_do_not_know_step_1,
    i_already_did_1I,
    i_dont_have_id_1B,
    i_live_in_a_different_state_1C,
    nah_not_right_now_1H,
    register_online_1A,
    register_by_mail_1D,
    register_in_person_1E,
    yes_registered_to_vote_1F,
    lets_do_it_share_step_1,
    webview_six_by_six_step_1,
    // step 2
    going_to_the_poll_step_2,
    mail_early_ballot_reminder_step2,
    alright_how_do_i_get_one_2A,
    // step 3
    i_will_step_3,
    already_did_step_3,
    send_early_ballot_reminder_step3,
    // step 4
    go_to_polls_reminder_step4,
    i_voted_step_4,
    
    no_not_registered_to_vote,
    not_yet_step_1,
    not_yet_registered_for_early_ballot_step_2,
    register_to_vote_reminder_step_1,
    yup_mail_early_ballot_step_2,
    // TEST MESSAGES
    share,
    simple_button_message,
    simple_button_url_template,
    simple_message,
    webview_template,
    // FAQ
    how_do_i_vote,
    how_do_i_register_to_vote,
    what_is_this,
    what_is_an_early_ballot,
    who_are_you,
    what_is_the_deadline_to_register_to_vote,
    what_is_the_deadline_to_request_an_early_ballot,
    when_do_i_have_to_mail_in_my_early_ballot,
    what_time_do_the_polls_close
} = responses;

const VERIFY_TOKEN = process.env.VERIFY_TOKEN;
const APP_ID = process.env.APP_ID;
const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;

function handleReminderMessage(sender_psid) {
    let message;
    let date;

    // send reminder at 10:00 MST on 2018-10-01, 2018-10-19, 2018-11-01, 2018-11-06

    if (date = "2018-10-01") {

        message = register_to_vote_reminder_step_1;

    } else if (date = "2018-10-19") {
        message = mail_early_ballot_reminder_step2;
    } else if (date = "2018-11-01") {
        message = send_early_ballot_reminder_step3;
    } else if (date = "2018-11-06") {
        message = go_to_polls_reminder_step4;
    }

    callSendAPI(sender_psid, message);
}

function handleMessage(sender_psid, received_message) {
    // check if user is in db
    // if NOT add to db
    // challenger = challengerRoutes.getChallengerBySenderPsid(sender_psid);
    // console.log(challenger);
    // if (challenger.hasOwnProperty('_id')) {
    //     console.log(`${challenger} has own _id`);
    // } else {
    //     console.log(`no challenger`);
    // }
    console.log("request start");
    request({
        "uri": `${API_URL}/challengers/senderPsid/${sender_psid}`,
        // "qs": { "access_token": PAGE_ACCESS_TOKEN },
        "method": "GET",
        // "json": request_body
    }, (err, res, body) => {
        if (!err) {
            console.log(`message sent! then res.body`);
            // console.log(request_body.message);
            // console.log(res.body);
            console.log(`body`);
            console.log(body);
            console.log("done body");
            challenger = body;
            console.log("after res");
        } else {
            console.err(`Unable to send message: ${ err }`);
        }
    });
    console.log("request end");

    if (challenger.hasOwnProperty('_id')) {
            console.log(`${challenger} has own _id`);
        } else {
            console.log(`no challenger`);
        }
    
    
    let first_name;
    let user_id;
    let response;
    let text = received_message.text;
    console.log("handleMessage");
    // console.log(received_message);
    console.log(text);
    let getStarted = /get started\??/ig;
    let whatIsThis = /what ?['i]s this\??/ig;
    let whatIsSixBySix = /what ?['i]s sixbysix\??/ig;
    let whatIsThisAbout = /what ?['i]s this about\??/ig;
    let whatDoesThisChallengeMean = /what does this challenge mean\??/ig;
    let howDoIParticipate = /how do I participate\??/ig;
    let howDoIGetStarted = /how do I get started\??/ig;
    let howDoIRegisterToVote = /how do I register to vote\??/ig;
    let howDoIRegister = /how do I register\??/ig;
    let whereDoIRegisterToVote = /where do I register to vote\??/ig;
    let whereDoIRegister = /where do I register\??/ig;
    let whatDoIDoAfterChallengingMyFriends = /what do i do after challenging my friends\??/ig;
    let whatDoIDoAfterAcceptingTheChallenge = /what do i do after accepting the challenge\??/ig;
    let whoAreYou = /who are you\??/ig;
    let whatAreYou = /what are you\??/ig;
    let howDoIVote = /how do i vote\??/ig;
    let whereDoIVote = /where do i vote\??/ig;
    let whatIsAnEarlyBallot = /what is an early ballot\??/ig;
    let shouldIVoteByEarlyBallot = /should i vote by early ballot\??/ig;
    let shouldIVoteEarly = /should i vote early\??/ig;
    let howDoIRequestAnEarlyBallot = /how do i request an early ballot\??/ig;
    let whatIsTheDeadlineToRegisterToVote = /what ?['i]s the deadline to register to vote\??/ig;
    let whatIsTheDeadlineToRequestAnEarlyBallot = /what ?['i]s the deadline to request an early ballot\??/ig;
    let whatIsTheDeadlineToRegister = /what ?['i]s the deadline to register\??/ig;
    let whenDoIHaveToMailInMyEarlyBallot = /when do i have to mail in my early ballot\??/ig;
    let whatIsTheDeadlineForMailingInMyEarlyBallot = /what is the deadline for mailing in my early ballot\??/ig;
    let whatIsTheDeadlineForMyEarlyBallot = /what is the deadline for my early ballot\??/ig;
    let byWhenDoIHaveToMailInMyEarlyBallot = /by when do i have to mail in my early ballot\??/ig;
    let whenIsItTooLateToMailInMyEarlyBallot = /when is it too late to mail in my early ballot\??/ig;
    let whenIsIt2LateToMailInMyEarlyBallot = /when is it 2 late to mail in my early ballot\??/ig;
    let whenIsItTooL8ToMailInMyEarlyBallot = /when is it too l8 to mail in my early ballot\??/ig;
    let whenIsIt2L8ToMailInMyEarlyBallot = /when is it 2 l8 to mail in my early ballot\??/ig;
    let whenIsItToL8ToMailInMyEarlyBallot = /when is it to l8 to mail in my early ballot\??/ig;
    let whenIsItToLateToMailInMyEarlyBallot = /when is it to late to mail in my early ballot\??/ig;
    // 
    let whatTimeDoThePollsClose = /what time do the polls close\??/ig;
    let howLateCanIGoToVote = /how late can i go to vote\??/ig;
    let howLateCanIGo2Vote = /how late can i go 2 vote\??/ig;
    let howL8CanIGoToVote = /how l8 can i go to vote\??/ig;
    let howL8CanIGo2Vote = /how l8 can i go 2 vote\??/ig;
    let whatTimesAreThePollsOpen = /what times are the polls open\??/ig;
    let whatTimesRThePollsOpen = /what times r the polls open\??/ig;
    let howEarlyCanIGoToVote = /how early can i go to vote\??/ig;
    let howEarlyCanIGo2Vote = /how early can i go 2 vote\??/ig;
    let initiate_share = /share\??/ig;
    
    text = text.replace(getStarted, "get started");
    text = text.replace(initiate_share, "share");
    text = text.replace(whatIsThis, "what is this");
    text = text.replace(whatIsSixBySix, "what is sixbysix");
    text = text.replace(whatIsThisAbout, "what is this about");
    text = text.replace(whatDoesThisChallengeMean, "what does this challenge mean");
    text = text.replace(howDoIParticipate, "how do I participate");
    text = text.replace(howDoIRegisterToVote, "how do i register to vote");
    text = text.replace(howDoIRegister, "how do i register");
    text = text.replace(whereDoIRegisterToVote, "where do i register to vote");
    text = text.replace(whereDoIRegister, "where do i register");
    text = text.replace(whatDoIDoAfterChallengingMyFriends, "what do i do after challenging my friends");
    text = text.replace(whatDoIDoAfterAcceptingTheChallenge, "what do i do after accepting the challenge");
    text = text.replace(howDoIGetStarted, "how do I get started");
    text = text.replace(whoAreYou, "who are you");
    text = text.replace(whatAreYou, "what are you");
    text = text.replace(howDoIVote, "how do i vote");
    text = text.replace(whereDoIVote, "where do i vote");
    text = text.replace(whatIsAnEarlyBallot, "what is an early ballot");
    text = text.replace(shouldIVoteByEarlyBallot, "should i vote by early ballot");
    text = text.replace(shouldIVoteEarly, "should i vote by early ballot");
    text = text.replace(howDoIRequestAnEarlyBallot, "how do i request an early ballot");
    text = text.replace(whatIsTheDeadlineToRegisterToVote, "what's the deadline to register to vote");
    text = text.replace(whatIsTheDeadlineToRegister, "what's the deadline to register to vote");
    text = text.replace(whatIsTheDeadlineToRequestAnEarlyBallot, "what's the deadline to request an early ballot");
    text = text.replace(whenDoIHaveToMailInMyEarlyBallot, "when do i have to mail in my early ballot");
    text = text.replace(whatIsTheDeadlineForMailingInMyEarlyBallot, "when do i have to mail in my early ballot");
    text = text.replace(whatIsTheDeadlineForMyEarlyBallot, "when do i have to mail in my early ballot");
    text = text.replace(byWhenDoIHaveToMailInMyEarlyBallot, "when do i have to mail in my early ballot");
    text = text.replace(whenIsItTooLateToMailInMyEarlyBallot, "when do i have to mail in my early ballot");
    text = text.replace(whenIsItTooL8ToMailInMyEarlyBallot, "when do i have to mail in my early ballot");
    text = text.replace(whenIsIt2LateToMailInMyEarlyBallot, "when do i have to mail in my early ballot");
    text = text.replace(whenIsIt2L8ToMailInMyEarlyBallot, "when do i have to mail in my early ballot");
    text = text.replace(whenIsItToL8ToMailInMyEarlyBallot, "when do i have to mail in my early ballot");
    text = text.replace(whenIsItToLateToMailInMyEarlyBallot, "when do i have to mail in my early ballot");
    
    text = text.replace(whatTimeDoThePollsClose, "what time do the polls close");
    text = text.replace(howLateCanIGoToVote, "what time do the polls close");
    text = text.replace(howLateCanIGo2Vote, "what time do the polls close");
    text = text.replace(howL8CanIGoToVote, "what time do the polls close");
    text = text.replace(howL8CanIGo2Vote, "what time do the polls close");

    text = text.replace(whatTimesAreThePollsOpen, "what time do the polls close");
    text = text.replace(whatTimesRThePollsOpen, "what time do the polls close");
    text = text.replace(howEarlyCanIGoToVote, "what time do the polls close");
    text = text.replace(howEarlyCanIGo2Vote, "what time do the polls close");
    
    console.log(text);
    console.log("message regex");

    if (received_message.text) {
        
        switch (text) {
            case "Accept the challenge":
                response = get_started_step_1;
                break;
            case "Challenge accepted!":
                response = get_started_step_1;
                break;
            case "get started":
                response = get_started_step_1;
                // change user acceptedChallenge = true
                break;
            case "Yes!":
                response = yes_registered_to_vote_1F;
                //  change user registeredToVote = true
                break;
            case "webview":
                response = webview_six_by_six_step_1;
                break;
            case "webview template":
                response = webview_template;
                break;
            case "Step 2":
                response = mail_early_ballot_reminder_step2;
                break;
            case "Step 3":
                response = send_early_ballot_reminder_step3;
                break;
            case "Step 4":
                response = go_to_polls_reminder_step4;
                break;
                
            case "help":
                response = {
                    "text": "What would you like help with?"
                };
            case "how do i register to vote":
                response = how_do_i_register_to_vote;
                break;
            case "how do i register":
                response = how_do_i_register_to_vote;
                break;
            case "where do i register to vote":
                response = how_do_i_register_to_vote;
                break;
            case "where do i register":
                response = how_do_i_register_to_vote;
                break;
            case "what do i do after challenging my friends":
                response = how_do_i_register_to_vote;
                break;
            case "what do i do after accepting the challenge":
                response = how_do_i_register_to_vote;
                break;
            case "how do i vote":
                response = how_do_i_vote;
                break;
            case "where do i vote":
                response = how_do_i_vote;
                break;
            case "what's the deadline to register to vote":
                response = what_is_the_deadline_to_register_to_vote;
                break;
            case "what's the deadline to request an early ballot":
                response = what_is_the_deadline_to_request_an_early_ballot;
                break;
            case "what time do the polls close":
                response = what_time_do_the_polls_close;
                break;
            case "share":
                response = lets_do_it_share_step_1;
                break;
            case "Talk to human":
                response = {
                    "text": "No problem. Give me a bit to contact them and someone will respond."
                };
                break;
            case "menu":
                response = {
                    "text": "I don't have a menu, yet. Are you hungry?"
                };
                break;
            case "human":
                response = {
                    "text": "No problem. Give me a bit to contact them and someone will respond."
                };
                break;
            case "Human":
                response = {
                    "text": "No problem. Give me a bit to contact them and someone will respond."
                };
                break;
            case "what is this":
                response = what_is_this;
                break;
            case "what is sixbysix":
                response = what_is_this;
                break;
            case "what is this about":
                response = what_is_this;
                break;
            case "what does this challenge mean":
                response = what_is_this;
                break;
            case "how do I participate":
                response = what_is_this;
                break;
            case "how do I get started":
                response = what_is_this;
                break;
            case "who are you":
                response = who_are_you;
                break;
            case "what are you":
                response = who_are_you;
                break;
            case "what is an early ballot":
                response = what_is_an_early_ballot;
                break;
            case "should i vote by early ballot":
                response = what_is_an_early_ballot;
                break;
            case "how do i request an early ballot":
                response = what_is_an_early_ballot;
                break;
            case "when do i have to mail in my early ballot":
                response = when_do_i_have_to_mail_in_my_early_ballot;
                break;
            // case "How do I get started?":
            //     response = what_is_this;
            //     break;
            // case "How do I get started":
            //     response = what_is_this;
            //     break;        
            default:
                response = default_response
                break;
        }


    } else if (received_message.attachments) {
        let attachments_url = received_message.attachments[0].payload.url;
        response = {
            "attachment": {
                "type": "template",
                "payload": {
                    "template_type": "generic",
                    "elements": [{
                        "title": "Is this the right picture?",
                        "subtitle": "Tap a button to answer.",
                        "image_url": attachments_url,
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Yes!",
                                "payload": "yes"
                            },
                            {
                                "type": "postback",
                                "title": "No!",
                                "payload": "no"
                            }
                        ]
                    }]
                }
            }
        }
    }
    callSendAPI(sender_psid, response);
}

function handlePostback(sender_psid, received_postback) {
    let response;

    // console.log(challengerRoutes);
    // console.log(challenger);
    // if (challenger.hasOwnProperty('_id')) {
    //     console.log(`${challenger} has own _id postback`);
    // } else {
    //     console.log(`no challenger postback`);
    // }

    let payload = received_postback.payload;
    switch (payload) {
        case "Already did":
            response = already_did_step_3;
            break;
        case "Alright, how do I get one?":
            response = alright_how_do_i_get_one_2A;
            break;
        case "Accept the challenge":
            response = get_started_step_1;
            break;
        case "Challenge accepted!":
            response = get_started_step_1;
            break;
        case "Get Started":
            response = get_started_step_1;
            break;
        case "Get started":
            response = get_started_step_1;
            break;
        case "get started":
            response = get_started_step_1;
            break;
        case "Going to the poll":
            response = going_to_the_poll_step_2;
            break;
        case "I already did":
            response = i_already_did_1I;
            //  change user sixChosen = true
            break;
        case "I don’t have an AZ Driver License or ID":
            response = i_dont_have_id_1B;
            break;
        case "I live in a different state":
            response = i_live_in_a_different_state_1C;
            break;
        case "I voted!":
            response = i_voted_step_4;
            //  change user voted = true
            break;
        case "I will":
            response = i_will_step_3;
            break;
        case "Let’s do it!":
            response = lets_do_it_share_step_1;
            break;
        case "Nah, I’m cool":
            
            break;
        case "Nah, not right now":
            response = nah_not_right_now_1H;
            break;
        case "No, I haven't yet":
            response = no_not_registered_to_vote;
            break;
        case "I don't know":
            response = i_do_not_know_step_1;
            break;
        case "Not Yet":
            response = not_yet_step_1;
            break;
        case "Not Yet.":
            response = not_yet_registered_for_early_ballot_step_2;
            break;
        case "Register by mail":
            response = register_by_mail_1D;
            break;
        case "Register in person":
            response = register_in_person_1E;
            break;
        case "Register Online":
            response = register_online_1A;
            break;
        case "Done":
            response = done_registered_in_person_1G;
            break;
        case "Done!":
            response = yes_registered_to_vote_1F;
            break;
        case "I’m all set":
            response = yes_registered_to_vote_1F;
            break;
        case "Yes!":
            response = yes_registered_to_vote_1F;
            break;
        case "yes":
            response = { "text": "Thanks!" };
            break;
        case "Yup!":
            response = yup_mail_early_ballot_step_2;
            break;
        case "no":
            response = { "text": "Oops, try sending another image." };
            break;
        case "Talk to human":
            response = {
                "text": "No problem. Give me a bit to contact them and someone will respond."
            };
            break;
        case "Talk to a human":
            response = {
                "text": "No problem. Give me a bit to contact them and someone will respond."
            };
            break;
    
        default:
            response = default_response;
            break;
    }

    callSendAPI(sender_psid, response);
}

function callSendAPI(sender_psid, response) {
    console.log("callSendAPI");
    console.log(response);
    let responseMessage;
    let request_body;
    if (response.length > 1) {
        console.log(">1");
        response.forEach(function(responseMessage) {
            // responseMessage = response;
        request_body = {
            "recipient": {
                "id": sender_psid
            },
            "message": responseMessage
        }
    
        request({
            "uri": "https://graph.facebook.com/v3.1/me/messages",
            "qs": { "access_token": PAGE_ACCESS_TOKEN },
            "method": "POST",
            "json": request_body
        }, (err, res, body) => {
            if (!err) {
                console.log(`message sent!`);
                // console.log(request_body.message);
            } else {
                console.err(`Unable to send message: ${ err }`);
            }
         });
        })
    } else {
        console.log("1");
        responseMessage = response;
        request_body = {
            "recipient": {
                "id": sender_psid
            },
            "message": responseMessage
        }
    
        request({
            "uri": "https://graph.facebook.com/v3.1/me/messages",
            "qs": { "access_token": PAGE_ACCESS_TOKEN },
            "method": "POST",
            "json": request_body
        }, (err, res, body) => {
            if (!err) {
                console.log(`message sent!`);
                // console.log(request_body.message);
            } else {
                console.err(`Unable to send message: ${ err }`);
            }
        });
    }
    
}

app.post('/webhook', (req, res) => {
    let body = req.body;
    // console.log("req.body.entry[0]");
    // console.log(req.body.entry[0]);

    // console.log("req");
    // console.log(req);

    if (body.object === 'page') {
        body.entry.forEach(function (entry) {
            let webhook_event = entry.messaging[0];
            console.log(webhook_event);

            let sender_psid = webhook_event.sender.id;
            console.log(`Sender PSID: ${sender_psid}`);

            if (webhook_event.message) {
                handleMessage(sender_psid, webhook_event.message);
            } else if (webhook_event.postback) {
                handlePostback(sender_psid, webhook_event.postback);
            }
        });
        // console.log("res");
        // console.log(res);

        res.status(200).send('EVENT_RECEIVED');
    } else {

        res.sendStatus(404);
    }
});

app.get('/webhook', (req, res) => {
    // console.log("req");
    // console.log(req);

    let mode = req.query['hub.mode'];
    let token = req.query['hub.verify_token'];
    let challenge = req.query['hub.challenge'];
    // console.log("mode");
    // console.log(mode);
    // console.log("token");
    // console.log(token);
    // console.log("challenge");
    // console.log(challenge);

    if (mode && token) {
        if (mode === 'subscribe' && token === VERIFY_TOKEN) {
            
            console.log('WEBHOOK_VERIFIED');
            res.status(200).send(challenge);
        } else {
            res.sendStatus(403);
        }
    }
});

const PORT = process.env.PORT || 1337

// app.get('/webhook', function (req, res) {
//     res.send("hola");
// });

app.listen( PORT, () => console.log(`webhook is Running on port ${PORT}`));
// app.listen( PORT, () => console.log(responses.simple_button_message));