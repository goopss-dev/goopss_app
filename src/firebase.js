// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {

    apiKey: "AIzaSyDjhQwZHXRMcjA5_MTV5B5vRVkBJSGcChI",
   authDomain: "goopss-test-app.firebaseapp.com",
  projectId: "goopss-test-app",
storageBucket: "goopss-test-app.appspot.com",
messagingSenderId: "327458593473",
appId: "1:327458593473:web:ede72dd57df3ecda629240"
  
  };
  

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };