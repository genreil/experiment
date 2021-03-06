(function () {
  "use strict";

  angular.module('public')
  .controller('InfoController', InfoController);

  InfoController.$inject = ['UserService'];
  function InfoController(UserService) {
    var infoCtrl = this;
    infoCtrl.user = UserService.getUser();
  }

})();
