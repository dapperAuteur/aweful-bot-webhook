let go_to_polls_reminder_step4 = [
    {
        "text": "It’s that time!"
    },
    {
        "text": "Today is the day to complete the sixbysix challenge! "
    },
    {
        "text": "If you need to go to the poll to vote or turn in an early ballot, (Link) click here to find your polling location (Link to https://voter.azsos.gov/VoterView/PollingPlaceSearch.do)…"
    },
    {
        "text": "Don’t forget to follow up with the six friends you challenged to make sure they get it done to."
    },
    {
        "text": "If they need a ride, help ‘em out. I’m counting you!…"
    },

    {
        "text": "Let me know when you’ve voted, send us a pic with your cool sticker!"
    },
    {
        "attachment":{
            "type":"template",
            "payload":{
                "template_type":"generic",
                "elements":[
                    {
                        "title":"I'll just...",
                        "subtitle":"SixBySix Fb Page",
                        "image_url":"https://firebasestorage.googleapis.com/v0/b/js-react-todo-0002.appspot.com/o/misha_collins-ill_wait_here.gif?alt=media&token=3d8110d9-824d-4eaa-8d1f-332c7c328883",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://m.me/sixbysixvote/"
                        },
                        "buttons":[
                            {
                                "type": "postback",
                                "title": "I voted!",
                                "payload": "I voted!"
                            }
                        ]  
                    }
                ]
            }
        }
  }
];

let GoToPollsReminderStep4 = go_to_polls_reminder_step4;
module.exports = GoToPollsReminderStep4;