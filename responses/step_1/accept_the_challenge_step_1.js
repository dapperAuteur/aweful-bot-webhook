let accept_the_challenge_step_1 = [
  {
    "text": "Here’s what it is - #sixbysix is a challenge you take on with friends.  You challenge six of your friends to make sure they vote by Nov. 6th.  My name is SAM (sixbysix auto messenger). I’m a chatbot and I’ll walk you through each level of the challenge, from now through final day of the challenge. …"
  },
  {
    "attachment": {
      "type": "template",
      "payload": {
        "template_type":"button",
        "text": "Your challenger will play along with you too. If everyone you challenged ends up voting, 🎉you win!🎉 To get started, just let me know you accept the challenge by clicking on “Challenge Accepted” below.",
        "buttons":[
          {
            "type": "postback",
            "title": "Accept the Challenge",
            "payload": "Accept the Challenge"
          }
        ]  
      }
    }
  },
];

let AcceptTheChallengeStep1 = accept_the_challenge_step_1;
module.exports = AcceptTheChallengeStep1;