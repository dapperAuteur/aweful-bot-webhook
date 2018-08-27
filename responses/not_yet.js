let not_yet = [
    {
        "text": "No problem.  As long as you’re a U.S. Citizen, a resident of Arizona, and over 18 years old, you can register real quick online."
    },
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type":"button",
                "text": "How to register:",
                "buttons":[
                    {
                        "type": "postback",
                        "title": "Register Online",
                        "payload": "Register Online"
                    },
                    {
                        "type": "postback",
                        "title": "I don’t have an AZ Driver License or ID",
                        "payload": "I don’t have an AZ Driver License or ID"
                    },
                    {
                        "type": "postback",
                        "title": "I live in a different state",
                        "payload": "I live in a different state"
                    }
                ]  
            }
        }
    }
]

let NotYet = not_yet;
module.exports = NotYet;
