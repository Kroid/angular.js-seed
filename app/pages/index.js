module.exports = function(ngModule) {
  'use strict';

  ngModule
    .config(router)
    .controller('IndexController', ctrl);

  function router($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: '/pages/index.html',
      controller: 'IndexController',
      controllerAs: 'vm',
      title: '',
    });
  }

  function ctrl() {
    var vm = this;
  }
};
