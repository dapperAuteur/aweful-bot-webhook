let what_is_this = [
  {
    "text": "#sixbysix is a challenge you take on with your friends. Basically, you challenge six of your friends and I’ll walk you through each level of the challenge from now through election day on Nov. 6th."
  },
  {
    "attachment": {
      "type": "template",
      "payload": {
        "template_type":"button",
        "text": "If everyone you challenged ends up voting, 🎉you win!🎉  To get started, all you have to do is accept the challenge.  Will you?",
        "buttons":[
          {
            "type": "postback",
            "title": "Challenge accepted!",
            "payload": "Challenge accepted!"
          },
          {
            "type": "postback",
            "title": "Talk to a human",
            "payload": "Talk to a human"
          }
        ]  
      }
    }
  }
]

let WhatIsThis = what_is_this;
module.exports = WhatIsThis;
