// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwsqI60vFAMCyD5h0wC1e9MANwVy7tTaQ",
  authDomain: "fundastohr-image-gallery.firebaseapp.com",
  projectId: "fundastohr-image-gallery",
  storageBucket: "fundastohr-image-gallery.appspot.com",
  messagingSenderId: "647697011157",
  appId: "1:647697011157:web:09d0149a4aacfc95932d5c",
  measurementId: "G-BKDLQ44KZQ",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseDB = getFirestore(FirebaseApp);
const analytics = getAnalytics(app);
