var rawjs = require('raw.js');
var reddit = new rawjs("dartFeed 0.0.1");
reddit.setupOAuth2("uWMDixz5I3EEkw", "fGrvDMuCuxGzJ0Wtj4nwmRl-IAw", "https://github.com/charmingmarmot/dartfeed");

reddit.auth({"username": "willdembinski", "password": "qwerASDF1"}, function(err, response) {
    if(err) {
        console.log("Unable to authenticate user: " + err);
    } else {

      // console.log("RESPONSE OBJECT!!! ",response)
      // console.log("RESPONSE TOKEN !!! ",response.access_token)
      console.log("RESPONSE expires_in in seconds!!! ",response.expires_in )
        // The user is now authenticated. If you want the temporary bearer token, it's available as response.access_token
        // and will be valid for response.expires_in seconds.

        // raw.js will automatically refresh the bearer token as it expires. Unlike web apps, no refresh tokens are available.
        reddit.hot(function(err,resp){
          if(err){
            console.log("There was an error: ",err);
          }else{
            resp.children.forEach(function(dataObj){
              console.log(dataObj.data)
            })
          }
        })
        console.log(response)
    }
});
// console.log(reddit);


