// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
import { getFirestore, collection, getDocs, addDoc, updateDoc, deleteDoc,  query, where, ref, uploadBytesResumable, getDownloadURL } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore-lite.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJ44fvRNMP8CPWl1DRtVhx_qDvbBdN-uw",
  authDomain: "sportbooking-33faa.firebaseapp.com",
  projectId: "sportbooking-33faa",
  storageBucket: "sportbooking-33faa.appspot.com",
  messagingSenderId: "442162631469",
  appId: "1:442162631469:web:82ef45c72839262f2079a4",
  measurementId: "G-8J51WTSWND"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db_cloud = getFirestore(app);

export {db_cloud, collection, getDocs, addDoc, updateDoc, deleteDoc, query, where };