import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const API_KEY = import.meta.env.VITE_API_KEY;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "sport-shop-web-df43f.firebaseapp.com",
  projectId: "sport-shop-web-df43f",
  storageBucket: "sport-shop-web-df43f.firebasestorage.app",
  messagingSenderId: "524129901986",
  appId: "1:524129901986:web:9bfa31e21f9f0186c1a6fb",
  measurementId: "G-R5JS7RHKHV",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); // Firestore
export const storage = getStorage(app);
