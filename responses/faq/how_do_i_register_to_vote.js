let how_do_i_register_to_vote = [
  {
    "text": "Click here so I can take you to the website where you can register to vote. (https://servicearizona.com/voterRegistration?popularclick)"
  },
  {
    "attachment": {
      "type": "template",
      "payload": {
        "template_type":"button",
        "text": "You’ll want to register if you haven’t done so in the last 2 years or if you’ve moved since then.",
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

let HowDoIRegisterToVote = how_do_i_register_to_vote;
module.exports = HowDoIRegisterToVote;
