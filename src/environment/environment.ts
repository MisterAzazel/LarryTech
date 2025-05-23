// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDhtSwgawuDoocXog-2AkVD-l0If3apFvA",
  authDomain: "larrytech-4e170.firebaseapp.com",
  projectId: "larrytech-4e170",
  storageBucket: "larrytech-4e170.firebasestorage.app",
  messagingSenderId: "66318339029",
  appId: "1:66318339029:web:671c9de6aa970990b10b5c",
  measurementId: "G-PKV145DT2L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);