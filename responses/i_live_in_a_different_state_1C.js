let i_live_in_a_different_state_1C = [
  {
    "text": "Ok, let me try to help you out.  Every state has slightly different rules about how to get it done,  but there’s a cool site that can help you figure that out. (Link) Click on this text and I’ll take you there (Link to https://vote.gov/)\n…\nLet me know once you’re done."
  },
  {
    "attachment": {
      "type": "template",
      "payload": {
        "template_type":"generic",
        "elements": [
          {
            "title":"Don't worry, I'll wait",
            "subtitle":"SixBySix Fb Page",
            "image_url":"https://firebasestorage.googleapis.com/v0/b/js-react-todo-0002.appspot.com/o/katt_williams-dont_worry_ill_wait.gif?alt=media&token=44c33351-5a1b-4438-bc44-12d1cf061ebc",
            "default_action": {
                "type": "web_url",
                "url": "https://www.facebook.com/sixbysixvote/"
            },
            "buttons":[
              {
                  "type": "postback",
                  "title": "Done!",
                  "payload": "Done!"
              }
            ] 
          }
        ] 
      }
    }
  }
]

let ILiveInADifferentState1C = i_live_in_a_different_state_1C;
module.exports = ILiveInADifferentState1C;