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
    res.end("sign in with FB page")
  }, 

  callback: function (req, res, next){
    res.send("callback happened")

  }

}
