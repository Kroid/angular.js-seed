module.exports = function(ngModule) {
  'use strict';

  ngModule.directive('navigation', directive);

  function directive($location, auth) {
    return {
      restrict: 'EA',
      templateUrl: '/directives/navigation.html',
      link: function(scope, ele, attrs) {
        scope.logout = logout;

        function logout() {
          auth.logout().then(function() {
            $location.path('/login');
          });
        }
      },
    }
  }
};
