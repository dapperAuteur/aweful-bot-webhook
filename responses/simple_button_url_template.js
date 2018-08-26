let simple_button_template = {
    "attachment":{
        "type":"template",
        "payload":{
          "template_type":"button",
          "text":"What do you want to do next?",
          "buttons":[
            {
              "type":"web_url",
              "url":"https://m.me/sixbysixvote/",
              "title":"SixBySix Chatbot"
            },
            {
                "type":"web_url",
                "url":"https://www.facebook.com/sixbysixvote/",
                "title":"SixBySix Fb Page"
            },
            {
                "type":"web_url",
                "url":"https://js-react-todo-0002.firebaseapp.com/",
                "title":"SixBySix Homepage"
            }
          ]
        }
      }
}

let SimpleButtonUrlTemplate = simple_button_template;
module.exports = SimpleButtonUrlTemplate;
