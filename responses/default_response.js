let default_response = [
  {
    "text": "Hi! This is the #sixbysix auto messenger bot, or SAM for short 🤖 "
  },
  {
    "attachment": {
      "type": "template",
      "payload": {
        "template_type":"button",
        "text": "Unfortunately you’ve messaged me something I don’t have an answer for.",
        "buttons":[
          {
            "type": "postback",
            "title": "Accept the challenge",
            "payload": "Accept the challenge"
          },
          {
            "type": "postback",
            "title": "Talk to a human",
            "payload": "Talk to a human"
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
        "text": "I can provide answers to some basic questions or I can contact a human to get back to you if I’m not being much help.",
        "buttons":[
          {
            "type": "web_url",
            "url": "https://servicearizona.com/voterRegistration?popularclick",
            "title": "Register to vote",
          },
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
  }
];

let DefaultResponse = default_response;
module.exports = DefaultResponse;
