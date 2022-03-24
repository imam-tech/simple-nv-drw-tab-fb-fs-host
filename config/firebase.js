import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore}  from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2o3LouuT535Op3bDfnYT04M6JFBBRzDY",
  authDomain: "simple-login-firebase-958aa.firebaseapp.com",
  projectId: "simple-login-firebase-958aa",
  storageBucket: "simple-login-firebase-958aa.appspot.com",
  messagingSenderId: "82585400019",
  appId: "1:82585400019:web:3fad8ef24f00d89e675a26",
  measurementId: "G-FS4ESX26C9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore(app);
export { auth, db } 