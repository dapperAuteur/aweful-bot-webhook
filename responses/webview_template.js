let webview_template = {
  attachment: {
    type: 'template',
    payload: {
      template_type: 'generic',
      image_aspect_ratio: 'square',
      elements: [
        {
          title: 'Welcome!',
          subtitle: 'Choose your preferences',
          buttons:[
            {
              type: 'web_url',
              url: "https://sixbysix.vote/",
              title: 'Webview (compact)',
              messenger_extensions: true,
              webview_height_ratio: 'compact' // Small view
            },
            {
              type: 'web_url',
              url: "https://sixbysix.vote/",
              title: 'Webview (tall)',
              messenger_extensions: true,
              webview_height_ratio: 'tall' // Medium view
            },
            {
              type: 'web_url',
              url: "https://sixbysix.vote/",
              title: 'Webview (full)',
              messenger_extensions: true,
              webview_height_ratio: 'full' // large view
            }
          ]
        }
      ]
    }
  }
}

let WebviewTemplate = webview_template;
module.exports = WebviewTemplate;

// const createButtons = (displayUrl) => {
//   return {
//     messages:[
//       {
//         attachment: {
//           type: 'template',
//           payload: {
//             template_type: 'generic',
//             image_aspect_ratio: 'square',
//             elements: [{
//               title: 'Welcome!',
//               subtitle: 'Choose your preferences',
//               buttons:[
//                 {
//                   type: 'web_url',
//                   url: displayUrl,
//                   title: 'Webview (compact)',
//                   messenger_extensions: true,
//                   webview_height_ratio: 'compact' // Small view
//                 },
//                 {
//                   type: 'web_url',
//                   url: displayUrl,
//                   title: 'Webview (tall)',
//                   messenger_extensions: true,
//                   webview_height_ratio: 'tall' // Medium view
//                 },
//                 {
//                   type: 'web_url',
//                   url: displayUrl,
//                   title: 'Webview (full)',
//                   messenger_extensions: true,
//                   webview_height_ratio: 'full' // large view
//                 }
//               ]
//             }]
//           }
//         }
//       }
//   ]};
// };