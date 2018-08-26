let share = {
        "attachment":{
          "type":"template",
          "payload":{
            "template_type":"generic",
            "elements":[
              {
                "title":"#SixBySix Challenge",
                "subtitle":"Accept The Challenge To Impact Change In Your Community",
                "image_url":"https://firebasestorage.googleapis.com/v0/b/js-react-todo-0002.appspot.com/o/Frame_Six_By_Six.png?alt=media&token=6a5fc1a7-663d-410b-9fde-42f6837c5ea0",
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
                              "title": "Share The Challenge",
                              "subtitle": "#SixBySix",
                              "image_url": "https://firebasestorage.googleapis.com/v0/b/js-react-todo-0002.appspot.com/o/anchorman-celebrate.gif?alt=media&token=9b40b360-8788-43ff-90c7-8d82cb9a18a5",
                              "default_action": {
                                "type": "web_url",
                                "url": "https://js-react-todo-0002.firebaseapp.com/"
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

let Share = share;
module.exports = Share;