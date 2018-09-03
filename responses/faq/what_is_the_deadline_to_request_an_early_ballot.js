let what_is_the_deadline_to_request_an_early_ballot = [
  {
    "attachment": {
      "type": "template",
      "payload": {
        "template_type":"button",
        "text": "You have to request an early ballot by Friday, Oct. 26th if you want it for Nov. 6th’s election. ...",
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

let WhatIsTheDeadlineToRequestAnEarlyBallot = what_is_the_deadline_to_request_an_early_ballot;
module.exports = WhatIsTheDeadlineToRequestAnEarlyBallot;
