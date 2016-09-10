(function () {
  'use strict';

  angular.module('LunchChecker', [])

  .controller('LCController', LCController);

  LCController.$inject = ['$scope'];
  function LCController ($scope) {
    $scope.items = "";
    $scope.message = "";

    $scope.countItems = function () {
      var arItems = toCleanArray($scope.items);
      var itemsCount = arItems.length;
      if ( itemsCount > 0 ){
        $scope.message = itemsCount <= 3 ? "Enjoy!" : "Too much!";
      }
      else {
        $scope.message = "Please enter data first";
      }
    };

    function toCleanArray(ar){
      return ar.split(',').map(function(s){return s.trim()}).filter(function(s){ return s != "" });
    }
  }

})();
