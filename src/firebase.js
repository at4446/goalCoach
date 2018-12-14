 import * as firebase from 'firebase';

 var config = {
    apiKey: "AIzaSyBg8AJI0o2ap0nNE2nEak28UuHNoqBUSDo",
    authDomain: "goalcoach-c5520.firebaseapp.com",
    databaseURL: "https://goalcoach-c5520.firebaseio.com",
    projectId: "goalcoach-c5520",
    storageBucket: "",
    messagingSenderId: "922176371633"
  };

  export const firebaseApp=firebase.initializeApp(config);
  export const goalRef=  firebase.database().ref('goals');
  