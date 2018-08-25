// let get_started = {
//     "attachment":{
//         "type":"template",
//         "payload":{
//             "template_type":"generic",
//             "elements":[
//                {
//                 "text": `Congrats on accepting the #sixbysix challenge! Now, Level Up! Are you registered to vote?`,
//                 "title":"#SixBySix"   
//               },
//               {
//                 "title":"#SixBySix",
//                 "image_url":"https://firebasestorage.googleapis.com/v0/b/js-react-todo-0002.appspot.com/o/challengeAccepted.png?alt=media&token=57d4fc02-73fb-4b9b-b2b2-c32ebc686e85",
//                 "default_action": {
//                   "type": "web_url",
//                   "url": "https://js-react-todo-0002.firebaseapp.com/"
//                 },
//                 "buttons":[
//                             {
//                                 "type": "postback",
//                                 "title": "Yes!",
//                                 "payload": "yes"
//                             },
//                             {
//                                 "type": "postback",
//                                 "title": "No, I haven't yet",
//                                 "payload": "No, I haven't yet"
//                             },
//                             {
//                                 "type": "postback",
//                                 "title": "I don't know",
//                                 "payload": "I don't know"
//                             }
//                         ]      
//               }
//             ]
//           }
//       }
// };

let get_started = {
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

// let text = `Congrats on accepting the #sixbysix challenge ${first_name}! Now, Level Up! Are you registered to vote?`;

let GetStarted = get_started;
module.exports = GetStarted;

// let payload = {
//     "template_type":"generic",
//     "elements":[
//        {
//         "text": `Congrats on accepting the #sixbysix challenge ${first_name}! Now, Level Up! Are you registered to vote?`,
//         "title":"#SixBySix"   
//       },
//       {
//         "title":"#SixBySix",
//         "image_url":"https://firebasestorage.googleapis.com/v0/b/js-react-todo-0002.appspot.com/o/challengeAccepted.png?alt=media&token=57d4fc02-73fb-4b9b-b2b2-c32ebc686e85",
//         "default_action": {
//           "type": "web_url",
//           "url": "https://js-react-todo-0002.firebaseapp.com/",
//         //   "messenger_extensions": "<TRUE | FALSE>",
//         //   "webview_height_ratio": "<COMPACT | TALL | FULL>"
//         },
//         "buttons":[
//                     {
//                         "type": "postback",
//                         "title": "Yes!",
//                         "payload": "yes"
//                     },
//                     {
//                         "type": "postback",
//                         "title": "No, I haven't yet",
//                         "payload": "No, I haven't yet"
//                     },
//                     {
//                         "type": "postback",
//                         "title": "I don't know",
//                         "payload": "I don't know"
//                     }
//                 ]      
//       }
//     ]
//   }