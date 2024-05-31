// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "mindcanvas-7a3e1.firebaseapp.com",
  projectId: "mindcanvas-7a3e1",
  storageBucket: "mindcanvas-7a3e1.appspot.com",
  messagingSenderId: "865588077838",
  appId: "1:865588077838:web:a763b4e8d1d3d75ffaa35f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
