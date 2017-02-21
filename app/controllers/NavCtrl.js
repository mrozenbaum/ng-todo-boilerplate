"use strict";
// Our nav controller
app.controller("NavCtrl", function($scope) {
  $scope.navItems = [
  {name: "Logout"}, 
  {name: "All Items"}, 
  {name: "New Item"}

  ];

});