"use strict";
//$q is how we will make our database calls, returns promise
app.factory("ItemStorage", (FirebaseURL, $q, $http) => {

  let getItemList = () => {
    console.log("this should fire");
    // Make something to hold items from firebase database
    let items = [];

    return $q((resolve, reject) => {
      // plug in url, we want it to evaluate it
      $http.get(`${FirebaseURL}/items.json`)

      .then((itemObject) => {
        // get keys for all of the items
        let itemCollection = itemObject.data;

        Object.keys(itemCollection).forEach((key) => {
          // setting the ID to the key
          itemCollection[key].id = key;
          items.push(itemCollection[key]);
        });
        resolve(items);
        console.log(items);
      })
      .catch((error) => {
        reject(error);
      });
    });
  };
  // pass new item so it can post it to firebase
  let postNewItem = (newItem) => {
    return $q((resolve, reject) => {
      // Tell it to which collecton to post it to
      $http.post(`${FirebaseURL}/items.json`,
        JSON.stringify(newItem))
      .then((ObjectFromFirebase) => {
        resolve(ObjectFromFirebase);
      })
      // insead of success/error. with angular we use catch/error
      .catch((error) => {
        reject(error);
      });
    });
  };

  let deleteItem = (itemId) => {
    console.log("delete in factory", itemId);
    return $q((resolve, reject) => {
      $http.delete(`${FirebaseURL}/items/${itemId}.json`)
      .then((ObjectFromFirebase) => {
        resolve(ObjectFromFirebase);
      });
    });

  };

  // We will return these so they can be part of Item storage
  return{getItemList, postNewItem, deleteItem};

});