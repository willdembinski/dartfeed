var User = require('./userModel.js'); 
var body = require('body-parser'); 

module.exports = {

  checkAuth: function(req, res, next) {
    if (req.isAuthenticated()) {
       return next();
    } else {
       return res.send(401); 
    }
  },

  protectedPage: function (req, res, next){

    res.send("protected page"); 
  },
   
  signin: function (req, res, next){
    //console.log(req);
    console.log("user ", req.user);
    res.end("sign in with FB page")
  }, 

  callback: function (req, res, next){
    //send back user.id in the response - client will write out localstorage value 
    console.log(req.user);
    //res.send(req.user); //client needs to write this out
    res.send(200);

  }

}
