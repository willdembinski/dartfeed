var mongoose = require('mongoose');
var User = require('../users/userModel.js');

module.exports = function (req, res, next){
  var defaultUserObj = {
   username: "Mark Marmont",
   fbToken: null,
   fbId: 1000001
  };

  //If no user already exsists on session, create a default
  console.log("default user middleware", req.originalUrl);
  User.create(defaultUserObj, function (err, defaultUser){
    console.log("defaultUser", defaultUser);
    req.user = defaultUser;
    next();
  });
}

