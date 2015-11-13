var express = require('express'); 
var mongoose = require('mongoose'); 
var router = require('./router.js'); 
var body = require('body-parser'); 
var passport = require('passport')
var FacebookStrategy = require('passport-facebook').Strategy;
var config = require('./config.js'); 

mongoose.connect('mongodb://localhost/dartfeed'); 

var app = express();
var expressRouter = express.Router(); 

// parse application/x-www-form-urlencoded and application/json
app.use(body.urlencoded({ extended: false }))
app.use(body.json())

//set up router 
app.use('/', expressRouter); 
router(expressRouter); 

//set up facebook auth 
passport.use(new FacebookStrategy({
    clientID: config.fbClientID,
    clientSecret: config.fbClientSecret,
    callbackURL: config.fbCallback, 
    profileFields: ['email', 'profileUrl']
  },
  function(accessToken, refreshToken, profile, done) {
    process.nextTick(function(){
      console.log(accessToken);
      console.log(refreshToken);
      console.log(profile);
      done(null, profile); 
    })
    // User.findOrCreate(, function(err, user) {
    //   if (err) { return done(err); }
    //   done(null, user);
    // });
  }
));

app.listen(8000); 

module.exports = app; 

