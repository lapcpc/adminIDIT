import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // put your credentials here
  apiKey: "AIzaSyAyYoQgt37_eoKvVWxr8eCxdRNSJrP9OVs",
  authDomain: "idit-b9c3e.firebaseapp.com",
  projectId: "idit-b9c3e",
  storageBucket: "idit-b9c3e.appspot.com",
  messagingSenderId: "1040209433378",
  appId: "1:1040209433378:web:5f1fd5ace304a43e8f4b7b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);