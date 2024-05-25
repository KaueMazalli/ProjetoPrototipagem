// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDY0ALV0kny30vOZRYm9LPJWtdcwdobkSQ",
  authDomain: "prototipagem-26339.firebaseapp.com",
  projectId: "prototipagem-26339",
  storageBucket: "prototipagem-26339.appspot.com",
  messagingSenderId: "227783779279",
  appId: "1:227783779279:web:b3404527fed3d7759ca8ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Obtenha a instância de autenticação do Firebase
const db = getFirestore(app);
export { auth };
export default db;
