// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBs0jD7QbNsElD5BE5LJzhXcqVzU_oy_0g",
  authDomain: "bhromon-shohayok.firebaseapp.com",
  projectId: "bhromon-shohayok",
  storageBucket: "bhromon-shohayok.firebasestorage.app",
  messagingSenderId: "660182957682",
  appId: "1:660182957682:web:072066fc55440c27cd0ceb",
  measurementId: "G-JMSL8Z37Q8"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);