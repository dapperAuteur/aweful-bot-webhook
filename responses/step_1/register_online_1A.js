let register_online_1A = [
  {
    "text": "Ok, there’s a website you have to go to. (Link)Click on this text and we’ll take you there now. (Link to https://servicearizona.com/webapp/evoter)\n…\nOnce you’re done, let me know."
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
                "url": "https://m.me/sixbysixvote/"
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

let RegisterOnline = register_online_1A;
module.exports = RegisterOnline;