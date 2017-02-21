"use strict";

app.controller("ItemNewCtrl", function($scope, ItemStorage, $location){
  

  $scope.newTask = {
    assignedTo: "",
    dependencies: "",
    dueData: "",
    isCompleted: "",
    location: "",
    task: "",
    urgency: ""
  };

  // function for adding new item to new task
  $scope.addNewItem = function(){
    console.log("add new item");
    // created obj up on page, now using it here
    ItemStorage.postNewItem($scope.newTask)
    .then(function(response){
      $location.url("items/list");
    });
    console.log("you added a new item", $scope.newTask);
    $scope.newTask = {};

  };

});



