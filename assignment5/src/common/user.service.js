(function () {
  "use strict";

  angular.module('common')
    .service('UserService', UserService);

  function UserService() {
    var service = this;
    var user = null;

    service.storeUser = function(new_user){
      user = new_user;
    }

    service.getUser = function(){
      return user;
    }
  }

})();
