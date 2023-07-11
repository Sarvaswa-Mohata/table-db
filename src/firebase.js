// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGi0v2thBl2afjH02hhiN0anVBiZJHrBU",
  authDomain: "cart-764ab.firebaseapp.com",
  databaseURL: "https://cart-764ab-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cart-764ab",
  storageBucket: "cart-764ab.appspot.com",
  messagingSenderId: "159443057973",
  appId: "1:159443057973:web:086ad98bb6abe59b20a07c",
  measurementId: "G-MJEBKR44ND"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);