let already_did = [
  {
    "text": "*Sigh of relief* Good."
  },
  {
    "attachment": {
      "type": "template",
      "payload": {
        "template_type":"generic",
        "elements": [
          {
            "title":"You da best",
            "subtitle":"SixBySix Fb Page",
            "image_url":"https://firebasestorage.googleapis.com/v0/b/js-react-todo-0002.appspot.com/o/drake-you_da_best.gif?alt=media&token=cbb9adc7-3d05-4909-b286-c2bcf2cb87f7",
            "default_action": {
                "type": "web_url",
                "url": "https://www.facebook.com/sixbysixvote/"
            }
          }
        ] 
      }
    }
  }
]

let AlreadyDid = already_did;
module.exports = AlreadyDid;