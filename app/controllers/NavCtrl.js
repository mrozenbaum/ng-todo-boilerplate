"use strict";
// Our nav controller
// Factories send info to controllers
// Controllers cant talk to each other
app.controller("NavCtrl", function($scope, $window, SearchTermData) {
  $scope.searchText = SearchTermData;
  $scope.inLoggedIn = false;

});