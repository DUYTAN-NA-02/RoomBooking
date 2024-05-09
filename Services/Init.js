// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
import { getFirestore, collection, getDocs, addDoc, updateDoc, deleteDoc,  query, where, ref, uploadBytesResumable, getDownloadURL } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore-lite.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3la-Q1Mx5sgNPfstF9nB-2BZBrw8wvsE",
  authDomain: "roombooking-b29e0.firebaseapp.com",
  projectId: "roombooking-b29e0",
  storageBucket: "roombooking-b29e0.appspot.com",
  messagingSenderId: "1037001809672",
  appId: "1:1037001809672:web:96287fb0ca431a2b5e16bd",
  measurementId: "G-Q11DNSB2Q5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db_cloud = getFirestore(app);

export {db_cloud, collection, getDocs, addDoc, updateDoc, deleteDoc, query, where };