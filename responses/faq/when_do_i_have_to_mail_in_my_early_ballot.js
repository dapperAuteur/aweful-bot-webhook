let when_do_i_have_to_mail_in_my_early_ballot = [
  {
    "text": "Ballots have to be received (not postmarked) by 7pm on Nov. 6th.  The mail can take anywhere from 3-5 days, so you’ll want to drop it in the mail at the latest by Friday, Nov. 2nd if you’re in-state or a couple of days before if out-of-state. …"
  },
  {
    "attachment": {
      "type": "template",
      "payload": {
        "template_type":"button",
        "text": " But, don’t worry if you miss this deadline!  You can still drop it off at any polling location before they close on Nov. 6th.  You don’t even have to wait in line to do so, either! …",
        "buttons":[
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

let WhenDoIHaveToMailInMyEarlyBallot = when_do_i_have_to_mail_in_my_early_ballot;
module.exports = WhenDoIHaveToMailInMyEarlyBallot;
