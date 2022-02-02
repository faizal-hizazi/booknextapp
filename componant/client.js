import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/app";
import { getAuth } from "@firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
const firebaseConfig = {
  apiKey: "AIzaSyBb-i5ac5CI4Gvxu2zhOM-yeXNAVfQW0Qs",
  authDomain: "demoproject-cba4a.firebaseapp.com",
  projectId: "demoproject-cba4a",
  storageBucket: "demoproject-cba4a.appspot.com",
  messagingSenderId: "854473448631",
  appId: "1:854473448631:web:daf0abeb92e8791377c132",
  measurementId: "G-FL1BS4PD0Y",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore();
// const analytics = getAnalytics(app);
// export const ref = firebase.database().ref();
export const auth = getAuth();
