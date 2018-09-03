let what_is_the_deadline_to_register_to_vote = [
  {
    "attachment": {
      "type": "template",
      "payload": {
        "template_type":"button",
        "text": "To vote on Nov. 6th, you must be registered to vote by October 22nd. (Link) Click here if you want to go to the website where you can do that (Link to https://servicearizona.com/voterRegistration?popularclick) …",
        "buttons":[
          {
            "type": "web_url",
            "url": "https://www.azcleanelections.gov/en/where-do-i-vote ",
            "title": "Get an early ballot",
          },
          {
            "type": "web_url",
            "url": "https://voter.azsos.gov/VoterView/PollingPlaceSearch.do",
            "title": "Find polling location",
          }
        ]  
      }
    }
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

let WhatIsTheDeadlineToRegisterToVote = what_is_the_deadline_to_register_to_vote;
module.exports = WhatIsTheDeadlineToRegisterToVote;
