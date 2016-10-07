(function () {
  'use strict';

  angular.module('MenuApp')
    .controller('ItemsListController', ItemsListController);

  // Here 'items' came from the routes.js resolve:
  // resolve: {
  //   items: [...]
  // }
  ItemsListController.$inject = ['items', 'currentShortName'];
  function ItemsListController(items, currentShortName) {
    var itemsList = this;
    itemsList.items = items.data.menu_items;
    itemsList.currentShortName = currentShortName;
    //console.log("ItemsListController:", itemsList.items);
  }

})();
