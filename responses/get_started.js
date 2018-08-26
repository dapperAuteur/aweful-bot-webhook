let get_started = {
  "attachment": {
    "type": "template",
    "payload": {
      "template_type":"button",
      "text": "Congrats on accepting the #sixbysix challenge! Now, Level Up! Are you registered to vote?"
      "buttons":[
        {
            "type": "postback",
            "title": "Yes!",
            "payload": "yes"
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
  }
}

// let get_started = {
  // "attachment":{
      // "type":"template",
      // "payload":{
          // "template_type":"generic",
          // "elements":[
          //    {
          //     "text": `Congrats on accepting the #sixbysix challenge! Now, Level Up! Are you registered to vote?`,
          //     "title":"#SixBySix"   
          //   },
          //   {
          //     "title":"#SixBySix",
          //     "image_url":"https://firebasestorage.googleapis.com/v0/b/js-react-todo-0002.appspot.com/o/challengeAccepted.png?alt=media&token=57d4fc02-73fb-4b9b-b2b2-c32ebc686e85",
          //     "default_action": {
          //       "type": "web_url",
          //       "url": "https://js-react-todo-0002.firebaseapp.com/"
          //     },
          //     "buttons":[
          //                 {
          //                     "type": "postback",
          //                     "title": "Yes!",
          //                     "payload": "yes"
          //                 },
          //                 {
          //                     "type": "postback",
          //                     "title": "No, I haven't yet",
          //                     "payload": "No, I haven't yet"
          //                 },
          //                 {
          //                     "type": "postback",
          //                     "title": "I don't know",
          //                     "payload": "I don't know"
          //                 }
          //             ]      
          //   }
          // ]
        // }
    // }
// };

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

let GetStarted = get_started;
module.exports = GetStarted;