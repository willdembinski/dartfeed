var User = require('./userModel.js'); 
var body = require('body-parser'); 

module.exports = {

  signup: function (req, res, next){
    console.log(req.body);
    //create new user with username/pw and save to mongo
    var username = req.body.username; 
    var password = req.body.password; 

    User.create({
      username: username, 
      password: password
    }); 

    //setup pre-step to hash pw

  },
   
  signin: function (req, res, next){

  }, 


  check: function (req, res, next){

  }, 

  signout: function (req, res, next){

  }

}
