let what_time_do_the_polls_close = [
  {
    "text": "Most polling locations open at 6am and close on 7pm on Nov. 6th.  Even if they close at 7pm, most locations will let you vote as long as you were in line by 7pm, but couldn’t complete voting because the line was too long. …"
  },
  {
    "attachment": {
      "type": "template",
      "payload": {
        "template_type":"button",
        "text": "Is there anything else I can help with?",
        "buttons":[
          {
            "type": "postback",
            "title": "Talk to human",
            "payload": "Talk to human"
          }
        ]  
      }
    }
  }
];

let WhatTimeDoThePollsClose = what_time_do_the_polls_close;
module.exports = WhatTimeDoThePollsClose;
