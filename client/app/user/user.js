angular.module('dartnews.user', [])
.controller('UserController', function ($scope, $window, $location, Feed) {
  $scope.getUserProfile = function (){
    Feed.getUserProfile()
      .then(function (user){
        $scope.user = user; 
      })
    Feed.getCategories()
      .then(function (categories){
        console.log(categories);
        $scope.categories = categories; 
      })
  }
  $scope.addCategoriesToUser = function (){
    Feed.updateUserCategories($scope.selectedCategory);
  }

});
