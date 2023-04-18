// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVNl1pymZ9lGblJAYjTdK1tV50es94dbE",
  authDomain: "the-news-dragon-80915.firebaseapp.com",
  projectId: "the-news-dragon-80915",
  storageBucket: "the-news-dragon-80915.appspot.com",
  messagingSenderId: "350157851243",
  appId: "1:350157851243:web:d5ceb4f81a21f2f2107f2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;