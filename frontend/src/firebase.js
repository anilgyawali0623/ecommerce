// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhJZ9VKyxFBcUZ1TWV9vSMuR9uowWCfLU",
  authDomain: "ecommerce-eca22.firebaseapp.com",
  projectId: "ecommerce-eca22",
  storageBucket: "ecommerce-eca22.appspot.com",
  messagingSenderId: "874466081938",
  appId: "1:874466081938:web:e1c1ad7688b72b38daba4b",
  measurementId: "G-F5SVTQNJWL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);