// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0wwibv4-nraEvqItkwZh-8thiaPxowUA",
  authDomain: "myshoponline-3bc0b.firebaseapp.com",
  projectId: "myshoponline-3bc0b",
  storageBucket: "myshoponline-3bc0b.appspot.com",
  messagingSenderId: "529496194075",
  appId: "1:529496194075:web:ff6090882c503260baccbe",
  measurementId: "G-G2HBLJL7TG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);