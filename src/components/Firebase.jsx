// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2BQzJby_rh9LRhCLMUfW-8tTporiHxEo",
  authDomain: "nithin-f8c59.firebaseapp.com",
  projectId: "nithin-f8c59",
  storageBucket: "nithin-f8c59.appspot.com",
  messagingSenderId: "767795221509",
  appId: "1:767795221509:web:a2a788db347b3efd9a786c",
  measurementId: "G-Y3XJEE8T50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);