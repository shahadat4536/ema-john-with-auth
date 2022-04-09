// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD4uqc9nlLfpQsOU3Hlt39GRgtMRVrgwNs",
    authDomain: "ema-john-with-router-module-53.firebaseapp.com",
    projectId: "ema-john-with-router-module-53",
    storageBucket: "ema-john-with-router-module-53.appspot.com",
    messagingSenderId: "330382816159",
    appId: "1:330382816159:web:2039927a54b398336a03aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;