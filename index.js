'use strict'

VERIFY_TOKEN
APP_ID
PAGE_ACCESS_TOKEN

const express = require('express')
const bodyParser = require('body-parser')
const app = express().use(bodyParser.json());

let VERIFY_TOKEN = process.env.VERIFY_TOKEN
const APP_ID = process.env.APP_ID
const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN

function handleMessage(sender_psid, received_message) {
    
}

function handlePostback(sender_psid, received_message) {
    
}

function callSendAPI(sender_psid, received_message) {
    
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