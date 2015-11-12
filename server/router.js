var authController = require('./authController'); 

module.exports = function (router) {
  console.log('test');
  router.get('/api/auth/signin', authController.signin); 

  // router.get('/api/auth/signup', authController);
  // router.get('/api/auth/signout', authController);

}



