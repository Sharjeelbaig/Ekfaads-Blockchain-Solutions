// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDL2RFGC5oYqx_aaEi1Z5OKcQOVx_T8gEk",

  authDomain: "edfaak-cd0c6.firebaseapp.com",

  projectId: "edfaak-cd0c6",

  storageBucket: "edfaak-cd0c6.appspot.com",

  messagingSenderId: "1065014651359",

  appId: "1:1065014651359:web:d5e177f0b49c5179fb7c6a",

  measurementId: "G-PW9DJ8LCJ6",
};
// Initialize Firebase
export const app =
  firebase.apps.length <= 0 ? firebase.initializeApp(firebaseConfig) : null;
export const auth = firebase.auth();
export const db = firebase.firestore();
//firebase deploy --only hosting:edfaak
