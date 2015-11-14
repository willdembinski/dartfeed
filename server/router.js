var authController = require('./users/authController');
var userController = require('./users/userController'); 
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var config = require('./config.js'); 


module.exports = function (router) {
  router.get('/api/users', userController.getAllUsers);
  router.get('/api/user', userController.getCurrentUser);
  router.get('/api/user/:user_id', userController.getUser);
  router.put('/api/user/:user_id', userController.updateUser);
  router.get('/api/auth/signin', authController.signin); 
  router.get('/api/auth/protected', authController.checkAuth, authController.protectedPage); 


  router.get('/api/auth/callback', authController.callback)
  router.get('/api/auth/facebook', passport.authenticate('facebook'));
  router.get('/api/auth/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/api/auth/callback', failureRedirect: '/api/auth/signin' }));

  // ARTICLES
  // GET /api/articles
    // when we get articles of a specific category, would it make sense to create an articleID within the categories collection and reference
    // the categories collection instead?
    // use mongo WHERE equivalent
  // POST /api/articles
    // accept an array of articles 

  //router.get('/api/articles', articleController.getArticles);

  //router.post('/api/articles', articleController.insertArticles);

  // CATEGORIES?
  // how do we handle inserting categories?
    // make the worker handle the logic of extracting categories and sending us all the categories?
    // should we parse the articles data, check if there are any new categories, and then do the POST ourselves to the database?

  // USERS
  // GET /api/users
  // POST /api/users

}



