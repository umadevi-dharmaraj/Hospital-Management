// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGaxRzYg_-Voyy1Yug0dXKlENPpNJeoeE",
  authDomain: "healthcare-d0045.firebaseapp.com",
  projectId: "healthcare-d0045",
  storageBucket: "healthcare-d0045.appspot.com",
  messagingSenderId: "622961503443",
  appId: "1:622961503443:web:2f32cf9188fab7c87bb826"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
