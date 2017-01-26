import firebase from 'firebase';

try {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA79sjzFYE-pjIm0SjZv-FV8MMmPvJiUYI",
    authDomain: "react-redux-todo-app-acaf6.firebaseapp.com",
    databaseURL: "https://react-redux-todo-app-acaf6.firebaseio.com",
    storageBucket: "react-redux-todo-app-acaf6.appspot.com",
    messagingSenderId: "603439014626"
  };
  firebase.initializeApp(config);
} catch (e) {

}

export let firebaseRef = firebase.database().ref();
export default firebase;
