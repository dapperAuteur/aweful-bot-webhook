let who_are_you = [
  {
    "attachment": {
      "type": "template",
      "payload": {
        "template_type":"button",
        "text": "Hi! I’m the #sixbysix auto messenger bot, or SAM for short 🤖 I can provide answers to some basic questions.",
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
  },
  {
    "attachment": {
      "type": "template",
      "payload": {
        "template_type":"button",
        "text": "Or I’ll contact a human to get back to you if I’m not being much help.",
        "buttons":[
          {
            "type": "postback",
            "title": "Accept the challenge",
            "payload": "Get Started"
          },
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

let WhoAreYou = who_are_you;
module.exports = WhoAreYou;
