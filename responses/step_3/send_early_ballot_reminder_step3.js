let send_early_ballot_reminder_step3 = [
    {
        "text": "I wanted to remind you to mail in your early ballot if you haven’t done so already."
    },
    {
        "text": "There’s only a few more days left."
    },
    {
        "text": "You should drop it in the mail no later than Nov. 4th to make sure it gets there in time to be counted."
    },
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type":"button",
                "text": "If not, you’ll have to drop it off at a polling location on election day.",
                "buttons":[
                    {
                        "type": "postback",
                        "title": "Already did",
                        "payload": "Already did"
                    },
                    {
                        "type": "postback",
                        "title": "I will",
                        "payload": "I will"
                    }
                ]  
            }
        }
    }
]

let SendEarlyBallotReminderStep3 = send_early_ballot_reminder_step3;
module.exports = SendEarlyBallotReminderStep3;
