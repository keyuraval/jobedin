// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD9jrY6kLzy1tVS_qMjQiZjbQY4ZMrM8sI",
    authDomain: "jobedin-32538.firebaseapp.com",
    projectId: "jobedin-32538",
    storageBucket: "jobedin-32538.appspot.com",
    messagingSenderId: "379800069422",
    appId: "1:379800069422:web:438c9d87c2f5b53bd346bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;