"use strict";
// Letting app know we are using this todoapp
var app = angular.module("TodoApp", ["ngRoute"]);


app.config(function($routeProvider){
  $routeProvider.
  when('/items/list', {
    templateUrl: "partials/item-list.html",
    // Its good practice to have capitol letters in beginning of controller files
    controller: "ItemListCtrl"
  }).
  when('/items/new', {
    templateUrl: "partials/item-form.html",
    controller: "ItemNewCtrl"
  }).
  when('/items/details', {
    templateUrl: "partials/item-details.html",
    controller: "ItemViewCtrl"
  }).
  otherwise("/items/list");
});



