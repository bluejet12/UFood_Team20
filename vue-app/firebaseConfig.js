// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDUYSnnovx_AOPBBXzlfxUNFqa7u3GC1JE",
    authDomain: "ufood-c15e5.firebaseapp.com",
    projectId: "ufood-c15e5",
    storageBucket: "ufood-c15e5.appspot.com",
    messagingSenderId: "1084993476686",
    appId: "1:1084993476686:web:4b87eac6361f0c07184b1f",
    measurementId: "G-FDQXSHTR1S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);

