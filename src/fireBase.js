// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAShfhTrDx8PN6IKPfB2ksyn-qzyGF6L40",
    authDomain: "first-fire-project-4ab05.firebaseapp.com",
    projectId: "first-fire-project-4ab05",
    storageBucket: "first-fire-project-4ab05.appspot.com",
    messagingSenderId: "46840009822",
    appId: "1:46840009822:web:7bee4f67bd3ed51d4610cf",
    measurementId: "G-X4CQK5W234"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export default getFirestore()