'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request');
const app = express().use(bodyParser.json());

const responses = require('./responses');

let {
    already_did,
    alright_how_do_i_get_one_2A,
    get_started,
    done_registered_in_person_1G,
    going_to_the_poll,
    go_to_polls_reminder_step4,
    i_already_did_1I,
    i_dont_have_id_1B,
    i_live_in_a_different_state_1C,
    i_voted,
    i_will,
    lets_do_it_share,
    mail_early_ballot_reminder_step2,
    nah_not_right_now_1H,
    no_not_registered_to_vote,
    not_yet,
    not_yet_registered_for_early_ballot,
    register_online_1A,
    register_by_mail_1D,
    register_in_person_1E,
    register_to_vote_reminder,
    send_early_ballot_reminder_step3,
    share,
    simple_button_message,
    simple_button_url_template,
    simple_message,
    yes_registered_to_vote_1F,
    yup_mail_early_ballot
} = responses;

const VERIFY_TOKEN = process.env.VERIFY_TOKEN
const APP_ID = process.env.APP_ID
const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN

function handleReminderMessage(sender_psid) {
    let message;
    let date;

    // send reminder on 2018-10-01, 2018-10-19, 2018-11-01, 2018-11-06

    if (date = "2018-10-01") {

        message = register_to_vote_reminder;

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
    let response;
    let text = received_message.text;
    console.log("handleMessage");

    if (received_message.text) {
        
        switch (text) {
            case "Get Started":
                response = get_started;
                break;
            case "Yes!":
                response = yes_registered_to_vote_1F;
                break;
            case "Step 2":
                response = mail_early_ballot_reminder_step2;
                break;
            case "Step 3":
                response = send_early_ballot_reminder;
                break;
            case "Step 4":
                response = go_to_polls_reminder_step4;
                break;
        
            default:
                response = {
                    "text": "Is this what you want?"
                }
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

    let payload = received_postback.payload;
    switch (payload) {
        case "Already did":
            response = already_did;
            break;
        case "Alright, how do I get one?":
            response = alright_how_do_i_get_one_2A;
            break;
        case "Going to the poll":
            response = going_to_the_poll;
            break;
        case "I already did":
            response = i_already_did_1I;
            break;
        case "I don’t have an AZ Driver License or ID":
            response = i_dont_have_id_1B;
            break;
        case "I live in a different state":
            response = i_live_in_a_different_state_1C;
            break;I voted!
        case "I voted!":
            response = i_voted;
            break;
        case "I will":
            response = i_will;
            break;
        case "Let’s do it!":
            response = lets_do_it_share;
            break;
        case "Nah, not right now":
            response = nah_not_right_now_1H;
            break;
        case "No, I haven't yet":
            response = no_not_registered_to_vote;
            break;
        case "I don't know":
            response = no_not_registered_to_vote;
            break;
        case "Not Yet":
            response = not_yet;
            break;
        case "Not Yet.":
            response = not_yet_registered_for_early_ballot;
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
            response = yup_mail_early_ballot;
            break;
        case "no":
            response = { "text": "Oops, try sending another image." };
            break;
    
        default:
            response = {
                "text": "Is this what you want?"
            }
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
    console.log(req.body);

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

        res.status(200).send('EVENT_RECEIVED');
    } else {

        res.sendStatus(404);
    }
});

app.get('/webhook', (req, res) => {

    let mode = req.query['hub.mode'];
    let token = req.query['hub.verify_token'];
    let challenge = req.query['hub.challenge'];

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

app.listen( PORT, () => console.log(`webhook is Running on port ${PORT}`));
// app.listen( PORT, () => console.log(responses.simple_button_message));