"use strict";

app.factory("AuthFactory", function() {
// currentUser, createUser, loginUser, logoutUser, isAuthenticated, getUser
  let currentUser = null;
  // Passing in userObj and it will have email and password
  let createUser = function(userObj){
    return firebase.auth().createUserWithEmailAndPassword(userObj.email, userObj.password)
    .catch( function(error){
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log("error:", errorCode, errorMessage);
    });
  };

  let loginUser = function(userObj) {
    return firebase.auth().signInWithEmailAndPassword(userObj.email, userObj.password)
    .catch( function(error){
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log("error:", errorCode, errorMessage);
    });
  };

  let logoutUser = function(){
    console.log("logoutUser");
    return firebase.auth().signOut();
  };

  // To check if we actually have a user
  let isAuthenticated = function (){
    console.log("AuthFactory: isAuthenticated");
    return new Promise ( (resolve, reject) => {
      firebase.auth().onAuthStateChanged( (user) => {
        if (user){
          currentUser = user.uid;
          resolve(true);
        }else {
          resolve(false);
        }
      });
    });
  };

  let getUser = function(){
    return currentUser;
  };
  // Only sign up with google, but can sign in w. facebook etc.
  let provider = new firebase.auth.GoogleAuthProvider();

  let authWithProvider= function(){
      return firebase.auth().signInWithPopup(provider);
  };

  return {createUser, loginUser, logoutUser, isAuthenticated, getUser, authWithProvider};

});







