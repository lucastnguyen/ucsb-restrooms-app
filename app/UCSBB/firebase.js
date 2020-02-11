import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDbw-dMeNswFXPIQx9hrK21iNRAc7yU7dw",
  authDomain: "test-6be40.firebaseapp.com",
  databaseURL: "https://test-6be40.firebaseio.com",
  projectId: "test-6be40",
  storageBucket: "test-6be40.appspot.com",
  messagingSenderId: "111873482173",
  appId: "1:111873482173:web:57cd0b6bea08bbe70c06d4",
  measurementId: "G-25N5EEQZXN"
};

const app = firebase.initializeApp(firebaseConfig);
export const db = app.database();