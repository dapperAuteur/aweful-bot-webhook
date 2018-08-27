let mail_early_ballot_reminder = [
    {
        "text": "Yo! Did you know that you don’t have to go out to the polls to vote? You can register for early ballot and it will be mailed right to your house!"
    },
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type":"button",
                "text": "Are you registered to receive a ballot by mail?:",
                "buttons":[
                    {
                        "type": "postback",
                        "title": "Yup!",
                        "payload": "Yup!"
                    },
                    {
                        "type": "postback",
                        "title": "Not Yet.",
                        "payload": "Not Yet."
                    },
                    {
                        "type": "postback",
                        "title": "Going to the poll",
                        "payload": "Going to the poll"
                    }
                ]  
            }
        }
    }
]

let MailEarlyBallotReminder = mail_early_ballot_reminder;
module.exports = MailEarlyBallotReminder;
