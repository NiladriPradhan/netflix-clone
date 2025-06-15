// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeSX99tafSPgronmKa7YloG_9ImjGwEZ8",
  authDomain: "netflix-clone-47867.firebaseapp.com",
  projectId: "netflix-clone-47867",
  storageBucket: "netflix-clone-47867.firebasestorage.app",
  messagingSenderId: "208212911073",
  appId: "1:208212911073:web:eb87ccd2695e5fc47b28a0",
  measurementId: "G-5QYZE7WR1Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);