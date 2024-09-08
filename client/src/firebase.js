import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-f7c16.firebaseapp.com",
  projectId: "mern-blog-f7c16",
  storageBucket: "mern-blog-f7c16.appspot.com",
  messagingSenderId: "539148465969",
  appId: "1:539148465969:web:6d039d3a0842208f93a210"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);