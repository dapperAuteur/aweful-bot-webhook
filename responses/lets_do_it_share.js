let lets_do_it_share = {
        "attachment":{
          "type":"template",
          "payload":{
            "template_type":"generic",
            "elements":[
              {
                "title":"#SixBySix Challenge",
                "subtitle":"Accept The Challenge To Impact Change In Your Community",
                "image_url":"https://firebasestorage.googleapis.com/v0/b/js-react-todo-0002.appspot.com/o/Level_Up_Challenge_Six_By_Six.png?alt=media&token=a908c86c-4d73-49ae-9fb8-5c916e333013",
                "buttons": [
                  {
                    "type": "element_share",
                    "share_contents": { 
                      "attachment": {
                        "type": "template",
                        "payload": {
                          "template_type": "generic",
                          "elements": [
                            {
                              "title": "Take The #SixBySix Challenge",
                              "subtitle": "#SixBySix",
                              "image_url": "https://firebasestorage.googleapis.com/v0/b/js-react-todo-0002.appspot.com/o/Accepted_Six_By_Six.png?alt=media&token=4169c559-642c-4be3-9576-442ecc27750b",
                              "default_action": {
                                "type": "web_url",
                                "url": "https://www.sixbysix.vote/"
                              },
                              "buttons": [
                                {
                                    "type": "web_url",
                                    "url": "https://m.me/sixbysixvote/", 
                                    "title": "Talk To SixBySix"
                                  }
                              ]
                            }
                          ]
                        }
                      }
                    }
                  }
                ]
              }
            ]
          }
        }
      };

let LetsDoItShare = lets_do_it_share;
module.exports = LetsDoItShare;