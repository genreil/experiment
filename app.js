(function () {
'use strict';

angular.module('DIApp', [])
//.controller('DIController', ['$scope', '$filter', '$injector', DIController]);
// or better:
.controller('DIController', DIController);
DIController.$inject = ['$scope', '$filter', '$injector'];
function DIController ($scope,
                       $filter,
                       $injector) {
  $scope.name = "Yaakov";

  $scope.upper = function () {
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  };

  console.log($injector.annotate(DIController));
}

function AnnonateMe(name, job, blah) {
  return "Blah!";
}

console.log(DIController.toString());

})();
