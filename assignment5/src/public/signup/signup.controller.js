(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService', 'UserService'];
function SignupController(MenuService, UserService) {
  var signupCtrl = this;

  signupCtrl.submit = function () {
  	signupCtrl.completed = false;
    MenuService.getMenuItem(signupCtrl.user.fav_dish).then(function(data){
    	signupCtrl.user.menu_item = data;
	    signupCtrl.error = (data === null);
	    if ( !signupCtrl.error ){
	    	UserService.storeUser(signupCtrl.user);
	    	signupCtrl.completed = true;
	    }
    });
  };
}

})();
