let lets_do_it_share_step_1 = {
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
                              "image_url": "https://firebasestorage.googleapis.com/v0/b/js-react-todo-0002.appspot.com/o/CHALLENGED.png?alt=media&token=8de3cf8d-93c1-4f37-9673-8a5a6e98f034",
                              "default_action": {
                                "type": "web_url",
                                "url": "https://m.me/sixbysixvote/"
                              },
                              "buttons": [
                                {
                                    "type": "web_url",
                                    "url": "https://m.me/sixbysixvote/", 
                                    "title": "Accept the Challenge"
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

let LetsDoItShareStep1 = lets_do_it_share_step_1;
module.exports = LetsDoItShareStep1;