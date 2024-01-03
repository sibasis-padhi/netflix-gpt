// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL5qYpt-i4Rsqbwm0piSWh_AkrFgKECSE",
  authDomain: "netflixapp-8cb6c.firebaseapp.com",
  projectId: "netflixapp-8cb6c",
  storageBucket: "netflixapp-8cb6c.appspot.com",
  messagingSenderId: "132601285951",
  appId: "1:132601285951:web:fe7aaad71abb830709d78a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//eslint-disable-next-line
const analytics = getAnalytics(app);

export const auth = getAuth();
