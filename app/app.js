"use strict";

var app = angular.module("TodoApp", ["ngRoute"])
.constant('FirebaseURL', "https://todolist-d3948.firebaseio.com");

app.config(function($routeProvider){
  $routeProvider.
  when('/items/list',{
    // goes to ng-view
    templateUrl: "partials/item-list.html",
    controller: 'ItemListCtrl'
  }).
  when('/items/new', {
    templateUrl: "partials/item-form.html",
    controller: 'ItemNewCtrl'
  }).
  when('/items/:itemId', {
    templateUrl: "partials/item-details.html",
    controller: 'ItemViewCtrl'
  }).
  otherwise('/items/list');
});


