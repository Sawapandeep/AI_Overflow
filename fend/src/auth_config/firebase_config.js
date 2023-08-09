// Import the functions you need from the SDKs you need
import firebase from 'firebase/app'; 
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgzsbL5TFAM2fUU0O9tKc0_1q-lz0o-cg",
  authDomain: "ai-overflow-b3d05.firebaseapp.com",
  databaseURL: "https://ai-overflow-b3d05-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ai-overflow-b3d05",
  storageBucket: "ai-overflow-b3d05.appspot.com",
  messagingSenderId: "628261652569",
  appId: "1:628261652569:web:dfd88ec8e6a82c55824948",
  measurementId: "G-Q2X9WR2HWX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);