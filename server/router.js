var authController = require('./auth/authController');
var userController = require('./users/userController'); 


module.exports = function (router) {
  console.log('test');
  router.get('/api/auth/signin', authController.signin); 

  // router.get('/api/auth/signup', authController);
  // router.get('/api/auth/signout', authController);

  router.get('/api/users/test', userController.addUserTest ) // test route

  // ARTICLES
  // GET /api/articles
    // when we get articles of a specific category, would it make sense to create an articleID within the categories collection and reference
    // the categories collection instead?
    // use mongo WHERE equivalent
  // POST /api/articles
    // accept an array of articles 

  // CATEGORIES?
  // how do we handle inserting categories?
    // make the worker handle the logic of extracting categories and sending us all the categories?
    // should we parse the articles data, check if there are any new categories, and then do the POST ourselves to the database?

  // USERS
  // GET /api/users
  // POST /api/users

}



