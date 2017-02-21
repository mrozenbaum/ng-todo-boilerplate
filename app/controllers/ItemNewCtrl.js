"use strict";

app.controller("ItemNewCtrl", function($scope){
  // Empty obj for new tasks
  $scope.newTask = {};

  // function for adding new item to new task
  $scope.addNewItem = function(){
    console.log("add new item");
    // created obj up on page, now using it here
    $scope.newTask.isCompleted = false;
    // giving item an id
    $scope.newTask.id = $scope.items.length;
    // push this item into task
    $scope.items.push($scope.newTask);
    // then setting newtask empty for new task
    $scope.newTask = {};

  };

});



