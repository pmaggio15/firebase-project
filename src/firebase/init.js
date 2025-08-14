// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-VbrCGNubr7h4xyAlYUNmT-OB6-vOEVs",
  authDomain: "fir-project-583b7.firebaseapp.com",
  projectId: "fir-project-583b7",
  storageBucket: "fir-project-583b7.firebasestorage.app",
  messagingSenderId: "502798190057",
  appId: "1:502798190057:web:0ae8645720573549a17778"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();