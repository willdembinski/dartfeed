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

  var updateUserCategories = function (category){
    console.log(category);
    return $http({
      url: '/api/categories', 
      method: 'PUT',
      data: {
        categories: {
          category: category.toString()
        }
      }
    });
  }

  return {
    getUserProfile: getUserProfile,
    getCategories: getCategories,
    updateUserCategories: updateUserCategories
  }

})
