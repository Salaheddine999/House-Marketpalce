// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAr2CnRY811WapaHFKmsiaUBby14KgBV1w",
  authDomain: "house-marketplace-46a9f.firebaseapp.com",
  projectId: "house-marketplace-46a9f",
  storageBucket: "house-marketplace-46a9f.appspot.com",
  messagingSenderId: "359338049842",
  appId: "1:359338049842:web:6310a5ea874a2dc3bd972b",
  measurementId: "G-804LVK8XBW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();