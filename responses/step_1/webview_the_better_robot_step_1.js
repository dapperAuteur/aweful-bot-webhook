let webview_the_better_robot_step_1 = [
  {
    "text": "To start the SixBySix Challenge you must sign in to the SixBySix app with Facebook."
  },
  {
    "text": "Click the button below. Then click the 'Sign In with Facebook' button."
  },
  {
    attachment: {
      type: 'template',
      payload: {
        template_type: 'generic',
        image_aspect_ratio: 'square',
        elements: [
          {
            title: 'Accept the Challenge!',
            subtitle: 'Sign in to the SixBySix App',
            buttons:[
              {
                type: 'web_url',
                url: "https://quiet-dusk-11231.herokuapp.com/",
                title: 'Webview (compact)',
                messenger_extensions: true,
                webview_height_ratio: 'compact' // Small view
              },
              {
                type: 'web_url',
                url: "https://quiet-dusk-11231.herokuapp.com/",
                title: 'Webview (tall)',
                messenger_extensions: true,
                webview_height_ratio: 'tall' // Medium view
              },
              {
                type: 'web_url',
                url: "https://quiet-dusk-11231.herokuapp.com/",
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
]

let WebviewTheBetterRobotStep1 = webview_the_better_robot_step_1;
module.exports = WebviewTheBetterRobotStep1;
