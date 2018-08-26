let simple_button_template = {
    "attachment": {
        "type": "template",
        "payload": {
        "template_type":"button",
        "text": "Congrats on accepting the #sixbysix challenge! Now, Level Up! Are you registered to vote?",
        "buttons":[
            {
                "type": "postback",
                "title": "Yes!",
                "payload": "yes"
            },
            {
                "type": "postback",
                "title": "No, I haven't yet",
                "payload": "No, I haven't yet"
            },
            {
                "type": "postback",
                "title": "I don't know",
                "payload": "I don't know"
            }
        ]  
        }
    }
}

let SimpleButtonTemplate = simple_button_template;
module.exports = SimpleButtonTemplate;
