// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIicFkzLqxZU3r13A_RP9S30qg_N-lAao",
  authDomain: "hostelbuddy-e1aad.firebaseapp.com",
  projectId: "hostelbuddy-e1aad",
  storageBucket: "hostelbuddy-e1aad.appspot.com",
  messagingSenderId: "870500734152",
  appId: "1:870500734152:web:586035c809540d228501fd",
  measurementId: "G-PDG560EZ1X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const provider = new GoogleAuthProvider();
