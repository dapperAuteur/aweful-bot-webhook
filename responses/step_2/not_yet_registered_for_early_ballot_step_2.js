let not_yet_registered_for_early_ballot_step_2 = [
    {
        "text": "It will make your life easier I promise.  Once you get the ballot, you have time to review it, ask your friends about it, and you  just have to complete it and put it back in the mail, or take it to the polls."
    },
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type":"button",
                "text": "You don’t even need a stamp, they provide an envelope that’s already paid for!",
                "buttons":[
                    {
                        "type": "postback",
                        "title": "Alright, how do I get one?",
                        "payload": "Alright, how do I get one?"
                    },
                    {
                        "type": "postback",
                        "title": "Nah, I’m cool",
                        "payload": "Nah, I’m cool"
                    }
                ]  
            }
        }
    }
]

let NotYetRegisteredForEarlyBallotStep2 = not_yet_registered_for_early_ballot_step_2;
module.exports = NotYetRegisteredForEarlyBallotStep2;
