// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKt1RsJPLon8EC2rBkYKhAhiHsaxIXjlI",
  authDomain: "passion-95c70.firebaseapp.com",
  projectId: "passion-95c70",
  storageBucket: "passion-95c70.appspot.com",
  messagingSenderId: "883438906112",
  appId: "1:883438906112:web:1e56e18cd110cb299e21e5"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

export { auth, firestore };