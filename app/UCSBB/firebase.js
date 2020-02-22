import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCsvuNbyqaEIOSwxezzhlO5c88Ptkr0RJk",
  authDomain: "bathroom-data.firebaseapp.com",
  databaseURL: "https://bathroom-data.firebaseio.com",
  projectId: "bathroom-data",
  storageBucket: "bathroom-data.appspot.com",
  messagingSenderId: "750327704519",
  appId: "1:750327704519:web:262eb5a61728d74326c7e2",
  measurementId: "G-0Y4LKS97K6"
};

const app = firebase.initializeApp(firebaseConfig);
export const db = app.database();