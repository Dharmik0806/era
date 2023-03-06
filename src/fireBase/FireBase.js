// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5Jf5lENKPGYpXSamksnlFLBYa-j2n4I0",
  authDomain: "erafeshion.firebaseapp.com",
  projectId: "erafeshion",
  storageBucket: "erafeshion.appspot.com",
  messagingSenderId: "524204272492",
  appId: "1:524204272492:web:4806be6d3568e1d1c82149",
  measurementId: "G-S1SJGXQH35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
