let what_is_an_early_ballot = [
  {
    "text": "An early ballot makes it simple for you to vote without having to wait until Nov. 6th.  The ballot you receive is exactly the same as the ballots handed out at polling locations and are counted the same too. …"
  },
  {
    "text": "To get one, just call 602-506-1511 on weekdays during normal work hours. (Link) Or click here to get the address for you County Recorder’s office and pick one up in person.  You can even vote right then and there! 🙌 (Link to https://azsos.gov/elections/voting-election/contact-information-county-election-officials) …"
  },
  {
    "attachment": {
      "type": "template",
      "payload": {
        "template_type":"button",
        "text": "One you have your ballot, just fill it out, sign the envelope as indicated, and either drop it in the mail - postage is already paid - or drop it off at a polling location on Nov. 6th. …",
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

let WhatIsAnEarlyBallot = what_is_an_early_ballot;
module.exports = WhatIsAnEarlyBallot;
