// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDy9ckeJxueiK3Y_T8O0IPkrue2NMrIlbU",
  authDomain: "profile-bf2d3.firebaseapp.com",
  projectId: "profile-bf2d3",
  storageBucket: "profile-bf2d3.firebasestorage.app",
  messagingSenderId: "240223735480",
  appId: "1:240223735480:web:439d93269337a27846ae4d",
  measurementId: "G-ZTYQMV5KJ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);