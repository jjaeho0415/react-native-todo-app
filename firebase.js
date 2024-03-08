// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIipJoSOikn7BT9doq20HQO9ad0sEPGVE",
  authDomain: "react-native-todo-app-d43ab.firebaseapp.com",
  projectId: "react-native-todo-app-d43ab",
  storageBucket: "react-native-todo-app-d43ab.appspot.com",
  messagingSenderId: "1034583977647",
  appId: "1:1034583977647:web:10bab51371d67cdec3ee5a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
