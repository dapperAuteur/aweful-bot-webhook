let payload = {
    "template_type":"generic",
    "elements":[
       {
        "title":"<TITLE_TEXT>",
        "image_url":"<IMAGE_URL_TO_DISPLAY>",
        "subtitle":"<SUBTITLE_TEXT>",
        "default_action": {
          "type": "web_url",
          "url": "<DEFAULT_URL_TO_OPEN>",
          "messenger_extensions": "<TRUE | FALSE>",
          "webview_height_ratio": "<COMPACT | TALL | FULL>"
        },
        "buttons": [
            {
                "type":"web_url",
                "url":"https://petersfancybrownhats.com",
                "title":"View Website"
              },{
                "type":"postback",
                "title":"Start Chatting",
                "payload":"DEVELOPER_DEFINED_PAYLOAD"
              }
        ]      
      },
    ]
  };

let carousel = {
    "template_type":"generic",
    "elements":[
      generic_template,
      generic_template
    ]
  };

  let generic_template = {
    "attachment":{
      "type":"template",
      "payload":{
        "template_type":"generic",
        "elements":[
           {
            "title":"Welcome!",
            "image_url":"https://petersfancybrownhats.com/company_image.png",
            "subtitle":"We have the right hat for everyone.",
            "default_action": {
              "type": "web_url",
              "url": "https://petersfancybrownhats.com/view?item=103",
              "webview_height_ratio": "tall",
            },
            "buttons":[
              {
                "type":"web_url",
                "url":"https://petersfancybrownhats.com",
                "title":"View Website"
              },{
                "type":"postback",
                "title":"Start Chatting",
                "payload":"DEVELOPER_DEFINED_PAYLOAD"
              }              
            ]      
          }
        ]
      }
    }
  }

  let share_template = {
    "type": "element_share",
    "share_contents": { 
      "attachment": {
        "type": "template",
        "payload": {
          "template_type": "generic",
          "elements": [
            {
              "title": "<TEMPLATE_TITLE>",
              "subtitle": "<TEMPLATE_SUBTITLE>",
              "image_url": "<IMAGE_URL_TO_DISPLAY>",
              "default_action": {
                "type": "web_url",
                "url": "<WEB_URL>"
              },
              "buttons": [
                {
                  "type": "web_url",
                  "url": "<BUTTON_URL>", 
                  "title": "<BUTTON_TITLE>"
                }
              ]
            }
          ]
        }
      }
    }
  }

  let share_template_2 = {
    "attachment":{
      "type":"template",
      "payload":{
        "template_type":"generic",
        "elements":[
          {
            "title":"Breaking News: Record Thunderstorms",
            "subtitle":"The local area is due for record thunderstorms over the weekend.",
            "image_url":"https://thechangreport.com/img/lightning.png",
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
                          "title": "I took the hat quiz",
                          "subtitle": "My result: Fez",
                          "image_url": "https://bot.peters-hats.com/img/hats/fez.jpg",
                          "default_action": {
                            "type": "web_url",
                            "url": "http://m.me/petershats?ref=invited_by_24601"
                          },
                          "buttons": [
                            {
                              "type": "web_url",
                              "url": "http://m.me/petershats?ref=invited_by_24601", 
                              "title": "Take Quiz"
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
  }