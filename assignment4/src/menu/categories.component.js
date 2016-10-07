(function () {
  'use strict';

  angular.module('MenuApp')
    .component('categories', {
      templateUrl: 'src/menu/templates/categories.html',
      bindings: {
        list: '<'
      }
    });

})();
