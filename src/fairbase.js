// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5-5K4Em6pJ3xruZnzM2AMqsSlP9Xq_Lk",
  authDomain: "avito-app-23ac8.firebaseapp.com",
  projectId: "avito-app-23ac8",
  storageBucket: "avito-app-23ac8.appspot.com",
  messagingSenderId: "459400005965",
  appId: "1:459400005965:web:89af340725d539c1bacf04",
  measurementId: "G-GGEZYP74HX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);