(function () {
  'use strict';

  angular.module('MenuApp')
    .controller('CategoriesListController', CategoriesListController);

  // Here 'categories' came from the routes.js resolve:
  // resolve: {
  //   categories: [...]
  // }
  CategoriesListController.$inject = ['categories'];
  function CategoriesListController(categories) {
    var catList = this;
    catList.categories = categories.data;
    console.log("CategoriesListController:", catList.categories);
  }

})();
