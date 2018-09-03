let get_started_step_1 = [
  {
    "text": "Congrats on accepting the #sixbysix challenge! Now, Level Up! Are you registered to vote?"
  },
  {
    "attachment": {
      "type": "template",
      "payload": {
        "template_type":"generic",
        "elements": [
          {
            "title":"#SixBySix Challenge Accepted",
            "subtitle":"SixBySix Fb Page",
            "image_url":"https://firebasestorage.googleapis.com/v0/b/js-react-todo-0002.appspot.com/o/Accepted_Six_By_Six.png?alt=media&token=4169c559-642c-4be3-9576-442ecc27750b",
            "default_action": {
                "type": "web_url",
                "url": "https://m.me/sixbysixvote/"
            },
            "buttons":[
              {
                  "type": "postback",
                  "title": "Yes!",
                  "payload": "Yes!"
              },
              {
                  "type": "postback",
                  "title": "No, I haven't yet",
                  "payload": "No, I haven't yet"
              },
              {
                  "type": "postback",
                  "title": "I don't know",
                  "payload": "I don't know"
              }
            ] 
          }
        ] 
      }
    }
  }
];

let GetStartedStep1 = get_started_step_1;
module.exports = GetStartedStep1;