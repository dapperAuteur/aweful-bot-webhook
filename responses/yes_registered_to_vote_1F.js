let yes_registered_to_vote_1F = [
    {
        "text": "🔥🔥🔥 You’re already halfway there! All that’s left now is to vote."
    },
    {
        "text": "I’ll message you a reminder when we get closer… you know, ‘cause I’m a good friend like that. Now, why don’t you level up again by challenging six of your friends to take the #sixbysix challenge along with you?"
    },
    {
        "attachment":{
            "type":"template",
            "payload":{
                "template_type":"generic",
                "elements":[
                    {
                        "title":"You're doing amazing sweetie",
                        "subtitle":"SixBySix Fb Page",
                        "image_url":"https://firebasestorage.googleapis.com/v0/b/js-react-todo-0002.appspot.com/o/youre_doing_great_kard.gif?alt=media&token=d789be1c-fcc9-45fc-a7a0-57cab22ebf92",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://www.facebook.com/sixbysixvote/"
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
                            },
                            {
                                "type": "postback",
                                "title": "I already did",
                                "payload": "I already did"
                            }
                        ]  
                    }
                ]
            }
        }
  }
];

let YesRegisteredToVote1F = yes_registered_to_vote_1F;
module.exports = YesRegisteredToVote1F;