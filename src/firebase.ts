// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEqDviQzkQQF2jYTpAAvSSOZ8Q1uhKR24",
  authDomain: "blogpage-1b74c.firebaseapp.com",
  projectId: "blogpage-1b74c",
  storageBucket: "blogpage-1b74c.firebasestorage.app",
  messagingSenderId: "680745860866",
  appId: "1:680745860866:web:2f1b1a45e2d3d5cb520c1b",
  measurementId: "G-KRZT7MQSNN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);