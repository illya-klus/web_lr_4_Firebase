// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMzCGybhsIf2A3NtZaHAFe_oqsqj5b-hs",
  authDomain: "sport-shop-web-df43f.firebaseapp.com",
  projectId: "sport-shop-web-df43f",
  storageBucket: "sport-shop-web-df43f.firebasestorage.app",
  messagingSenderId: "524129901986",
  appId: "1:524129901986:web:9bfa31e21f9f0186c1a6fb",
  measurementId: "G-R5JS7RHKHV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
