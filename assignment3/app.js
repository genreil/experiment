(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', foundItemsDirective)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

  function foundItemsDirective() {
    var ddo = {
      restrict: "E",
      templateUrl: 'foundItems.html',
      scope: {
        foundItems: '<',
        onRemove: '&'
      },
      controller: NarrowItDownController,
      controllerAs: 'list',
      bindToController: true
    };

    return ddo;
  }

  NarrowItDownController.$inject = ['$scope', 'MenuSearchService'];
  function NarrowItDownController ($scope, MenuSearchService) {
    var search = this;

    search.narrowItDown = function (searchTerm) {
      var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
      search.error = "";

      promise.then(function (response) {
        search.found = response;
        if ( search.found.length === 0 ){
          search.error = "Nothing found";
        }
      })
      .catch(function (error) {
        console.log(error);
      })
    };

    search.removeItem = function (itemIndex) {
      search.found.splice(itemIndex, 1);
    };

    search.hasErrors = function () {
      return search.error != undefined && search.error.length > 0;
    }
  }

  MenuSearchService.$inject = ['$http', 'ApiBasePath']
  function MenuSearchService($http, ApiBasePath) {
    var service = this;
    service.getMatchedMenuItems = function(searchTerm) {
      return $http({method: "GET", url: (ApiBasePath + "/menu_items.json")})
        .then(function (result) {
          var foundItems = [];
          if (searchTerm != undefined && searchTerm != ""){
            var searchStr = searchTerm.toLowerCase();
            for(var i=0; i < result.data.menu_items.length; ++i){
              var name = result.data.menu_items[i].name;
              if (name.toLowerCase().indexOf(searchStr) >= 0){
                foundItems.push(result.data.menu_items[i]);
              }
            }
          }else{
            console.log("Missing search string....")
          }

          return foundItems;
        }
      );
    };
  }

})();
