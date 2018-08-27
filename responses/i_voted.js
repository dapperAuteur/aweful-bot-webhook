let i_voted = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type":"generic",
                "elements": [
                    {
                        "title":"You a real one",
                        "subtitle":"SixBySix Fb Page",
                        "image_url":"https://firebasestorage.googleapis.com/v0/b/js-react-todo-0002.appspot.com/o/antm_youre_a_real_one.gif?alt=media&token=9058a884-8941-47be-9e6c-b97cc32747d6",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://www.facebook.com/sixbysixvote/"
                        }
                    }
                ]
            }
        }
    },
    {
        "text": "…"
    },
    {
        "text": "We made it!..."
    },
    {
        "text": "Now just check on your #sixbysix crew to make sure they made it too!"
    },
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type":"generic",
                "elements": [
                    {
                        "title":"I appreciate you",
                        "subtitle":"SixBySix Fb Page",
                        "image_url":"https://firebasestorage.googleapis.com/v0/b/js-react-todo-0002.appspot.com/o/anchorman-celebrate.gif?alt=media&token=9b40b360-8788-43ff-90c7-8d82cb9a18a5",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://www.facebook.com/sixbysixvote/"
                        }
                    }
                ]
            }
        }
    }
]

let IVoted = i_voted;
module.exports = IVoted;