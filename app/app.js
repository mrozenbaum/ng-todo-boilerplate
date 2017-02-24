"use strict";

var app = angular.module("TodoApp", ["ngRoute"]);

// this runs when page just loaded
//used to authenticate user when navigating to other views
let isAuth = (AuthFactory) => new Promise ( (resolve, reject) => {
  // console.log("running isAuth");
  AuthFactory.isAuthenticated()
  .then ( (userExists) => {
    console.log("userExists", userExists);
    if (userExists){
      console.log("Authenticated, go ahead.");
      resolve();
    } else {
      console.log("Authentication rejected, go away.");
      reject();
    }

  });

});

app.config(function($routeProvider){
  $routeProvider.
  // When you go to your local host, go here (login page)
  when('/', {
    templateUrl: 'partials/login.html',
    controller: "UserCtrl"
  }).
  // When we login, go to login screen
  when('/login', {
    templateUrl: 'partials/login.html',
    controller: "userCtrl"
  }).
  // When you logout, go to login screen
  when('/logout', {
    templateUrl: 'partials/login.html',
    controller: "UserCtrl"
  }).
  when('/items/list',{
    // goes to ng-view
    templateUrl: "partials/item-list.html",
    controller: 'ItemListCtrl',
    resolve: {isAuth}
  }).
  when('/items/new', {
    templateUrl: "partials/item-form.html",
    controller: 'ItemNewCtrl',
    resolve: {isAuth}
  }).
  when('/items/:itemId', {
    templateUrl: "partials/item-details.html",
    controller: 'ItemViewCtrl',
    resolve: {isAuth}
  }).
  when('/items/:itemId/edit', {
    templateUrl: 'partials/item-form.html',
    controller: 'ItemEditCtrl',
    resolve: {isAuth}
  }).
  // You have to login, before showing any lists to user
  otherwise('/');
});
// Run when the app loads
app.run(($location, FBCreds) => {
  let creds = FBCreds;
  let authConfig = {
    apiKey: creds.apiKey,
    authDomain: creds.authDomain,
    atabaseURL: creds.databaseURL
  };

  firebase.initializeApp(authConfig);

});

