let how_do_i_vote = [
  {
    "text": "You’ve got a few options when it comes to voting. …"
  },
  {
    "text": "I think the easiest is by early ballot.  To get one mailed to you, just call 602-506-1511 on weekdays during normal work hours. (Link) Or click here to get the address for you County Recorder’s office and pick one up in person."
  },
  {
    "text": "You can even vote right then and there! 🙌 (Link to https://azsos.gov/elections/voting-election/contact-information-county-election-officials) …"
  },
  {
    "attachment": {
      "type": "template",
      "payload": {
        "template_type":"button",
        "text": "The other option is to go to a polling location on Nov. 6th.  (Link) Click here and I can take you to a website that will help you find one. (Link to https://voter.azsos.gov/VoterView/PollingPlaceSearch.do)",
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

let HowDoIVote = how_do_i_vote;
module.exports = HowDoIVote;
