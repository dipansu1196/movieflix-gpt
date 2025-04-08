// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtFguE7jG8762ZzPFKmbz3HceBkej1CBI",
  authDomain: "movieflix-gpt-79e59.firebaseapp.com",
  projectId: "movieflix-gpt-79e59",
  storageBucket: "movieflix-gpt-79e59.firebasestorage.app",
  messagingSenderId: "919294229418",
  appId: "1:919294229418:web:ed6d3cf03df863bcb709d3",
  measurementId: "G-JH44M0L2TY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth(app);