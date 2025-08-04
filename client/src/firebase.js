import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB7Qq5LWjfeAULHGMvSjXdv8zLi9EvJ_3M",
  authDomain: "notes-app-6deb4.firebaseapp.com",
  projectId: "notes-app-6deb4",
  // ...other config from Firebase console...
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);