let done_registered_in_person_1G = [
    {
        "text": "Great! I know life can get hectic, so I’ll message you again a few days to remind you to go register so you can keep leveling up."
    },
    {
        "text": "In the meantime, why don’t you challenge six of your friends to take the #sixbysix challenge along with you?"
    },
    {
        "attachment":{
            "type":"template",
            "payload":{
                "template_type":"generic",
                "elements":[
                    {
                        "title":"#SixBySix Challenge",
                        "subtitle":"SixBySix Fb Page",
                        "image_url":"https://firebasestorage.googleapis.com/v0/b/js-react-todo-0002.appspot.com/o/office_michael_wink.gif?alt=media&token=3b86e987-76d4-430e-96e2-15ca9a6d240c",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://m.me/sixbysixvote/"
                        },
                        "buttons":[
                            {
                                "type": "postback",
                                "title": "Let’s do it!",
                                "payload": "Let’s do it!"
                            },
                            {
                                "type": "postback",
                                "title": "Nah, not right now",
                                "payload": "Nah, not right now"
                            }
                        ]  
                    }
                ]
            }
        }
  }
];

let DoneRegisteredInPerson1G = done_registered_in_person_1G;
module.exports = DoneRegisteredInPerson1G;