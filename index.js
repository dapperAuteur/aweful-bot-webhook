'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request');
const app = express().use(bodyParser.json());

const VERIFY_TOKEN = process.env.VERIFY_TOKEN
const APP_ID = process.env.APP_ID
const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN

function handleMessage(sender_psid, received_message) {
    let response;
    console.log("handleMessage");

    if (received_message.text) {
        // response = {
        //     "text": `You sent the message: "${ received_message.text }". Now send me an image!`
        // }

        response = {
            "attachment":{
              "type":"template",
              "payload":{
                "template_type":"generic",
                "elements":[
                  {
                    "title":"#SixBySix Challenge",
                    "subtitle":"Accept The Challenge To Impact Change In Your Community",
                    "image_url":"https://firebasestorage.googleapis.com/v0/b/js-react-todo-0002.appspot.com/o/Frame_Six_By_Six.png?alt=media&token=6a5fc1a7-663d-410b-9fde-42f6837c5ea0",
                    "buttons": [
                      {
                        "type": "element_share",
                        "share_contents": { 
                          "attachment": {
                            "type": "template",
                            "payload": {
                              "template_type": "generic",
                              "elements": [
                                {
                                  "title": "Share The Challenge",
                                  "subtitle": "#SixBySix",
                                  "image_url": "https://firebasestorage.googleapis.com/v0/b/js-react-todo-0002.appspot.com/o/anchorman-celebrate.gif?alt=media&token=9b40b360-8788-43ff-90c7-8d82cb9a18a5",
                                  "default_action": {
                                    "type": "web_url",
                                    "url": "https://js-react-todo-0002.firebaseapp.com/"
                                  },
                                  "buttons": [
                                    {
                                      "type": "web_url",
                                      "url": "https://www.facebook.com/sixbysixvote/", 
                                      "title": "Visit Fb Page"
                                    },
                                    {
                                        "type": "web_url",
                                        "url": "https://m.me/sixbysixvote/", 
                                        "title": "Talk To SixBySix"
                                      }
                                  ]
                                }
                              ]
                            }
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            }
          };

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

    if (payload === 'yes') {
        response = { "text": "Thanks!" }
    } else if (payload === 'no') {
        response = { "text": "Oops, try sending another image." }
    }

    callSendAPI(sender_psid, response);
}

function callSendAPI(sender_psid, response) {
    console.log("callSendAPI");
    let request_body = {
        "recipient": {
            "id": sender_psid
        },
        "message": response
    }

    request({
        "uri": "https://graph.facebook.com/v3.1/me/messages",
        "qs": { "access_token": PAGE_ACCESS_TOKEN },
        "method": "POST",
        "json": request_body
    }, (err, res, body) => {
        if (!err) {
            console.log(`message sent! ${ request_body }`);
            console.log(`${ request_body.message }`);
        } else {
            console.err(`Unable to send message: ${ err }`);
        }
    });
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