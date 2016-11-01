(function () {
  "use strict";

  angular.module('common')
    .service('UserService', UserService);

  function UserService() {
    var service = this;
    var users = {};

    service.storeUser = function(user){
      users[user.email] = user;
    }

    service.findUser = function (email){
      return users[email];
    }

  }

})();
