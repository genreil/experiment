(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

function SignupController() {
  var signupCtrl = this;

  signupCtrl.submit = function () {
  	console.log("Done!");
    signupCtrl.completed = true;
  };

}

})();
