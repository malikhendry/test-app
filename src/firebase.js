// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcgAAeWr2iWtHKhcyzsB1qS3QEesePlgI",
  authDomain: "pcweb6-cad36.firebaseapp.com",
  projectId: "pcweb6-cad36",
  storageBucket: "pcweb6-cad36.appspot.com",
  messagingSenderId: "100081820523",
  appId: "1:100081820523:web:cc5f2bda182b42d229a22e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);