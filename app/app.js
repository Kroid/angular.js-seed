const angular = require('angular');
require('angular-route');
const ngModule = angular.module('app', [
  'ngRoute',
]);

require('./config/router')(ngModule);
require('./services/auth')(ngModule);
require('./directives/navigation')(ngModule);
require('./pages/index')(ngModule);
require('./pages/login')(ngModule);

ngModule.run(run);

function run($rootScope, auth) {
  Object.defineProperty($rootScope, 'user', {
    get: function() {
      return auth.user;
    }
  });
}


