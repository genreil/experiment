(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])

  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['$scope', 'ShoppingListCheckOffService'];
  function ToBuyController ($scope, ShoppingListCheckOffService) {
    var toBuyList = this;

    toBuyList.items = ShoppingListCheckOffService.getItemsToBuy();

    toBuyList.buyItem = function (itemIndex) {
      ShoppingListCheckOffService.buyItem(itemIndex);
    };

    toBuyList.isEmpty = function () {
      return toBuyList.items.length === 0;
    };
  }

  AlreadyBoughtController.$inject = ['$scope', 'ShoppingListCheckOffService'];
  function AlreadyBoughtController ($scope, ShoppingListCheckOffService) {
    var boughtList = this;

    boughtList.items = ShoppingListCheckOffService.getBoughtItems();

    boughtList.isEmpty = function () {
      return boughtList.items.length === 0;
    };
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var itemsToBuy = [
      { name: "cookies", quantity: 10 },
      { name: "coke", quantity: 5 },
      { name: "cake", quantity: 3 },
      { name: "coffee", quantity: 20 },
      { name: "tea", quantity: 20 }
    ];

    var boughtItems = [];

    service.buyItem = function (itemIdex) {
      var boughtItem = itemsToBuy.splice(itemIdex, 1);
      boughtItems.push(boughtItem[0]);
    };

    service.getBoughtItems = function () {
      return boughtItems;
    };

    service.getItemsToBuy = function () {
      return itemsToBuy;
    };
  }

})();
