var authController = require('./auth/authController');
var userController = require('./users/userController'); 


module.exports = function (router) {
  console.log('test');
  router.get('/api/auth/signin', authController.signin); 

  // router.get('/api/auth/signup', authController);
  // router.get('/api/auth/signout', authController);

  router.get('/api/users/test', userController.addUserTest ) // test route

}



