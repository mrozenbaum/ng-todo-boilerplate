"use strict";
console.log("hiiiiiiiii");
app.controller("ItemListCtrl", function($scope, ItemStorage){
  console.log("hola");
  // function that goes to item storage, gets the item list, and adds it to the item collection ??
  // This function is internal to this controller
  ItemStorage.getItemList()
  .then(function(itemCollection){
    $scope.items = itemCollection;
  });

  // Function for deleting items
  $scope.itemDelete = function(itemId){
    console.log("delete this item", itemId);
    ItemStorage.deleteItem(itemId)
    .then(function(response){
      ItemStorage.getItemList().then(function(itemCollection){
        $scope.items = itemCollection;
      });
    });
    
  };

});