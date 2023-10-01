// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkHHqQbuaSYwungRj_CxyN7nr_ka-3gGM",
  authDomain: "auth-user-context.firebaseapp.com",
  projectId: "auth-user-context",
  storageBucket: "auth-user-context.appspot.com",
  messagingSenderId: "1024936945447",
  appId: "1:1024936945447:web:78d257b6f11ddd6bc36b02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;