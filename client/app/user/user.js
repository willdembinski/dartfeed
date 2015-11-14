angular.module('dartnews.user', [])
.controller('UserController', function ($scope, $window, $location, Feed) {
  $scope.getUserProfile = function (){
    Feed.getUserProfile()
      .then(function (user){
        $scope.user = user; 
      })
  }
});
