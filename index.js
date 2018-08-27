'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request');
const app = express().use(bodyParser.json());

const responses = require('./responses');

let {
    get_started,
    lets_do_it_share,
    nah_not_right_now_1H,
    share,
    simple_button_message,
    simple_button_url_template,
    simple_message,
    yes_registered_to_vote_1F
} = responses;

const VERIFY_TOKEN = process.env.VERIFY_TOKEN
const APP_ID = process.env.APP_ID
const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN

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
        case "Let’s do it!":
            response = lets_do_it_share;
            break;
        case "Nah, not right now":
            response = nah_not_right_now_1H;
            break;
        case "Yes!":
            response = yes_registered_to_vote_1F;
            break;
        case "yes":
            response = { "text": "Thanks!" };
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