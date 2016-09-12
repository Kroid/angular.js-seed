module.exports = function(ngModule) {
  'use strict';

  ngModule
    .config(router)
    .controller('LoginController', ctrl);

  function router($routeProvider) {
    $routeProvider.when('/login', {
      templateUrl: '/pages/login.html',
      controller: 'LoginController',
      controllerAs: 'vm',
      title: '',
    });
  }

  function ctrl($location, auth) {
    if (auth.user) return $location.path('/');

    var vm = this;

    vm.login = login;

    vm.error = null;
    vm.user = {
      email: 'login@mail.com',
      password: '123123',
    }


    function login(email, password) {
      auth.login(email, password).then(
        function(resp) {
          vm.error = null;
          $location.path('/');
        }, function(err) {
          vm.error = err;
        }
      );
    }
  }
};
