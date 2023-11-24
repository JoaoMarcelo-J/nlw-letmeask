import firebase from "firebase/app";

import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDoLSOUHAqon7QHJDEkCqgoqgqMk7HZRUg",
  authDomain: "letmeask-843c4.firebaseapp.com",
  databaseURL: "https://letmeask-843c4-default-rtdb.firebaseio.com",
  projectId: "letmeask-843c4",
  storageBucket: "letmeask-843c4.appspot.com",
  messagingSenderId: "255089527140",
  appId: "1:255089527140:web:690a508e35277159025271",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database };
