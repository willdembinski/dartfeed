angular.module('dartnews', [
  'dartnews.services',
  'dartnews.feed',
  'dartnews.user',
  'ngRoute'
])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/user', {
      templateUrl: '/app/user/user.html',
      controller: 'UserController'
    })
    .when('/feed', {
      templateUrl: '/app/feed/feed.html',
      controller: 'FeedController'
    })
    .otherwise({
      redirectTo: '/feed',
      templateUrl: '/app/feed/feed.html',
      controller: 'FeedController'
    });
});
