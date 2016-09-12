module.exports = function(ngModule) {
  'use strict';

  ngModule.service('auth', service);

  function service($location, $q) {
    var self = this;

    self.user = null;
    self.login = login;
    self.logout = logout;

    function login(email, password) {
      var deferred = $q.defer();

      setTimeout(function() {
        if (!email) return deferred.reject('Enter email address.');
        if (!password) return deferred.reject('Enter password.');

        self.user = {email: email};
        return deferred.resolve(self.user);
      }, 100);

      return deferred.promise;
    }

    function logout() {
      var deferred = $q.defer();

      setTimeout(function() {
        self.user = null;
        return deferred.resolve();
      }, 100);

      return deferred.promise;
    }
  }
};
