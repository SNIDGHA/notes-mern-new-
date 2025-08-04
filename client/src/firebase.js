import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB7Qq5LWjfeAULHGMvSjXdv8zLi9EvJ_3M",
  authDomain: "notes-app-6deb4.firebaseapp.com",
  projectId: "notes-app-6deb4",
  storageBucket: "notes-app-6deb4.appspot.com", // ✅ corrected!
  messagingSenderId: "389576854355",
  appId: "1:389576854355:web:424e5411ad060b4f48afa6",
  measurementId: "G-QV8V1M316Z"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
