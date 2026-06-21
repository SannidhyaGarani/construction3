// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWY8-aFdWJK6S4Cdxxi8AUWs2viGgKFKc",
  authDomain: "createspace-224ec.firebaseapp.com",
  projectId: "createspace-224ec",
  storageBucket: "createspace-224ec.firebasestorage.app",
  messagingSenderId: "447483265765",
  appId: "1:447483265765:web:e104caf70bd2c6ba434a0c",
  measurementId: "G-0DESW7KXJ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, analytics, auth };