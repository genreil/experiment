(function () {
  'use strict';

  angular.module('MenuApp')
    .controller('ItemsListController', ItemsListController);

  // Here 'items' came from the routes.js resolve:
  // resolve: {
  //   items: [...]
  // }
  ItemsListController.$inject = ['items'];
  function ItemsListController(items) {
    var itemsList = this;
    itemsList.items = items.data.menu_items;
    console.log("ItemsListController:", itemsList.items);
  }

})();
