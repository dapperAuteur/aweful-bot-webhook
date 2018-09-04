let acceptedChallenge,
    attachment,
    attachments,
    challenged,
    challengedBy,
    challenger,
    challengerFriends,
    challengers,
    fbAccessToken,
    fbSignedRequest,
    fbUserId,
    postedChallengeAccepted,
    postedRegisteredToVote,
    postedSixRegistered,
    postedSixVoted,
    postedVoted,
    registeredToVote, 
    senderPSID,
    sixChosen,
    sixRegistered,
    sixVoted,
    referralUrl,
    voted;
const API_URL = "https://lit-anchorage-94924.herokuapp.com/api/ver0001";
// export const getFacebookStatusResponse = (response) => {
//     fetch(`${API_URL}`)
// }
$(document).ready(function () {
    // $.getJSON(`/api/users/fbId/response.authResponse.userID`)
    //     .then(getChallenger)
    statusChangeCallback(response);
    fbAccessToken = response.authResponse.accessToken;
    fbSignedRequest = response.authResponse.signedRequest;
    fbUserId  = response.authResponse.userID;
    console.log(fbAccessToken, fbSignedRequest, fbUserId);
    let loginState = function checkLoginState() {
        FB.getLoginStatus(function(response) {
            statusChangeCallback(response);
        });
      }
    console.log(loginState);

});

exports.statusChangeCallback = (response) => {
    // let getFacebookStatusResponse = require('app');
    console.log(response);
    
    /*
      response = {
        status: 'connected',
        authResponse: {
            accessToken: '...',
            expiresIn:'...',
            signedRequest:'...',
            userID:'...'
        }
      }
    */
      if (response.status === 'connected') {
          console.log('Logged in & authenticated');
          console.log(response);
          let currentChallengerId = response.authResponse.userID;
          let currentChallengerAccessToken = response.authResponse.accessToken;
          console.log()
          challenger = getChallenerByfbUserId(fbUserId);
          console.log(challenger);

          // make call to friends and get user data
          // place user data in db
          // display user game status
      } if (response.status === 'authorization_expired') {
          console.log('logged in previously but app authorization to access data expired');
          console.log(response);
          // ask user to reauthorize app to participate
          // ask user if they want to see their game status
      } if (response.status === 'not_authorized') {
          console.log('logged into fb but no app authorization to access data');
          console.log(response);
          // invite user to participate in challenge
      } if (response.status === 'unknown') {
          console.log("user is either not logged into Facebook or explicitly logged out of your application so it doesn't attempt to connect to Facebook and thus, we don't know if they've authenticated your application or not.");
          console.log(response);
          // invite user to login to fb and participate in challenge
      } else {
          console.log("not unknown but not known why");
          console.log(response);
          // invite user to login to fb and participate in challenge
      }
  }

exports.getChallenger = (response) => {
    try {
        $.getJSON(`${API_URL}/challengers/${fbUserId}`)
            .then(function (challenger) {
                res.json(challenger);
        })
    } catch (error) {
        res.send(error);
    }
}

exports.getChallengers = (response) => {
    
}

exports.createChallenger = (senderPsid) => {
  // let token = `Bearer ${pObj.token}`;
  // let role = `Role ${pObj.userRole}`;
  let obj = { senderPsid: senderPsid }
  return fetch(`${API_URL}/challengers/`, {
    method: 'post',
    headers: new Headers({
      'Content-Type': 'application/json',
      // 'Authorization': ,
      // 'Role': role
    }),
    body: JSON.stringify({ ...senderPsid })
  })
    .then(resp => {
      if (!resp.ok) {
        if (resp.status >= 400 && resp.status < 500) {
          return resp.json().then(data => {
            let error = { errorMessage: data.message }
            console.log(error);
            throw error;
          })
        } else {
          let error = { errorMessage: 'Please Try Again Later. Server Is NOT Responding.' }
          console.log(error);
          throw error;
        }
      }
      return resp.json();
    })
      .catch(function (error) {
        console.log(error);
        return error;
      })
}

exports.getAttachment = (response) => {
    
}

exports.getAttachments = (response) => {
    
}

exports.getChallengedBy = (response) => {
    
}

exports.updateChallengedBy = (response) => {
    
}

exports.updateChallengedBy = (response) => {
    
}

exports.deleteChallenger = (response) => {
    
}

exports.getChallenerByfbUserId = (params) => {
    $.getJSON(`${API_URL}/challengers/fbUserId/${fbUserId}`)
        .then(function (challenger) {
            console.log(challenger);
            res.send(challenger);
        });
}

exports.getChallengerBySenderPsid = (senderPSID) => {
  return fetch(`${API_URL}/challengers/senderPsid/${senderPSID}`)
    .then(resp => {
      if (!resp.ok) {
        if (resp.status >= 400 && resp.status < 500) {
          return resp.json().then(data => {
            let error = { errorMessage: data.message };
            throw error;
        })
      } else {
        let error = { errorMessage: 'Please try again later. Server is NOT responding.' }
        throw error;
      }
    }
    return resp.json();
  })
    .catch(function (error) {
      console.log(error);
      return error;
    })
}

exports.getAttachmentsByChallenger = (response) => {
    
}

exports.createAttachment = (response) => {
    
}

exports.updateAttachment = (response) => {
    
}

exports.deleteAttachment = (response) => {
    
}

module.exports = exports;