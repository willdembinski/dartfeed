angular.module('dartnews.services', [])
.factory('Feed', function ($http){

  var getUserProfile = function (){
    return $http({
      url: '/api/user', 
      method: 'GET'
    });
  }

  return {
    getUserProfile: getUserProfile
  }

})
