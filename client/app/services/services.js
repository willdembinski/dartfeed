angular.module('dartnews.services', [])
.factory('Feed', function ($http){

  var getUserProfile = function (){
    return $http({
      url: '/api/user', 
      method: 'GET'
    });
  }

  var getCategories = function (){
    return $http({
      url: '/api/categories', 
      method: 'GET'
    });
  }

  return {
    getUserProfile: getUserProfile,
    getCategories: getCategories
  }

})
