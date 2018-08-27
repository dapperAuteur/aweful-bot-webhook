let register_to_vote_reminder = [
    {
        "text": "Hey! I wanted to check back in and make sure you finished registering to vote.  The deadline is October 9th.  Did you have a chance to get it done?"
    },
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type":"button",
                "text": "Did you register?",
                "buttons":[
                    {
                        "type": "postback",
                        "title": "I’m all set",
                        "payload": "I’m all set"
                    },
                    {
                        "type": "postback",
                        "title": "Not Yet",
                        "payload": "Not Yet"
                    }
                ]  
            }
        }
    }
]

let RegisterToVoteReminder = register_to_vote_reminder;
module.exports = RegisterToVoteReminder;
