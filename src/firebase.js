import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCQPJO0_Cvn6sjsxyTsuk8vu9DJw9ob3ZA",
    authDomain: "demoweb1-69d7c.firebaseapp.com",
    projectId: "demoweb1-69d7c",
    storageBucket: "demoweb1-69d7c.appspot.com",
    messagingSenderId: "90798004352",
    appId: "1:90798004352:web:e49292483bee80da27ee65"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);