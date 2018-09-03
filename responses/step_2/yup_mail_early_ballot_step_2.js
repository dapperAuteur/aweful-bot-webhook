let yup_mail_early_ballot_step_2 = [
  {
    "text": "I knew there was a reason I liked you 😛. Alright cool."
  },
  {
    "attachment": {
      "type": "template",
      "payload": {
        "template_type":"generic",
        "elements": [
          {
            "title":"I appreciate you",
            "subtitle":"SixBySix Fb Page",
            "image_url":"https://firebasestorage.googleapis.com/v0/b/js-react-todo-0002.appspot.com/o/thanks_dj_khalid.gif?alt=media&token=3dda393f-8fbb-4fe5-bd4e-3bb77743b1ff",
            "default_action": {
                "type": "web_url",
                "url": "https://m.me/sixbysixvote/"
            }
          }
        ] 
      }
    }
  },
  {
    "text": "…\nEarly ballots should have started to go out on October 10th, so if you requested an early ballot before that and haven’t received it yet, (Link) you can check to see what’s up by clicking here. (Link to https://recorder.maricopa.gov/earlyvotingballot/earlyvotingballotstatus.aspx)"
  }
]

let YupMailEarlyBallotStep2 = yup_mail_early_ballot_step_2;
module.exports = YupMailEarlyBallotStep2;