// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOgDzvVieYy4ec_J6WOFaoP71kc6gGphY",
  authDomain: "good-map-98202.firebaseapp.com",
  projectId: "good-map-98202",
  storageBucket: "good-map-98202.appspot.com",
  messagingSenderId: "546721272524",
  appId: "1:546721272524:web:a7e256e8f557fec125e869",
  measurementId: "G-KJ4WCYRWV6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const db = initializeFirestore();

export const actionCodeSettings = (path: string) => {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  let url = `http://localhost:3000/user/finishSignUp?cartId=${path}`;
  // This must be true.
  let handleCodeInApp = true;
  return {
      url,
      handleCodeInApp
  }
};

export default db;