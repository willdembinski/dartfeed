var express = require('express'); 
var session = require('express-session');
var mongoose = require('mongoose'); 
var router = require('./router.js'); 
var bodyParser = require('body-parser'); 
var cookieParser = require('cookie-parser'); 
var passport = require('passport')
var FacebookStrategy = require('passport-facebook').Strategy;
var config = require('./config.js'); 
var User = require('./users/userModel.js'); 

mongoose.connect('mongodb://localhost/dartfeed'); 

var app = express();
var expressRouter = express.Router(); 

//cookie parser
app.use(cookieParser());

// parse application/x-www-form-urlencoded and application/json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//set up facebook auth
app.use(session({secret: 'marmot'}));  
app.use(passport.initialize()); 
app.use(passport.session()); 
passport.use(new FacebookStrategy({
    clientID: config.fbClientID,
    clientSecret: config.fbClientSecret,
    callbackURL: config.fbCallback 
    //profileFields: ['email', 'profileUrl']
  },
  function(accessToken, refreshToken, profile, done) {
    process.nextTick(function(){
      console.log(accessToken);
      console.log(refreshToken);
      console.log(profile);

      ///store in the db 
      User.findOne({fbId:profile.id}, function(err, user){
        if(!user){
          User.create({
            username: profile.displayName,
            fbToken: accessToken, 
            fbId: profile.id
          })
        } else {
          console.log(err);
        }
      });
      done(null, profile); 
    })
  }
));


passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  console.log("deserializeUser");
  //console.log(user);
  done(null, user);
});

//set up router 
app.use('/', expressRouter); 
router(expressRouter); 

app.listen(8000); 

module.exports = app; 

