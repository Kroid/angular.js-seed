module.exports = function(ngModule) {
  'use strict';

  ngModule.config(router);
  function router($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.otherwise({redirectTo: '/'});
  }
};
