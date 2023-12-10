// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCCCdLD_N2pu7xB0uJs9Zs5iyTrysMUnEk",
	authDomain: "e-clone-7b931.firebaseapp.com",
	projectId: "e-clone-7b931",
	storageBucket: "e-clone-7b931.appspot.com",
	messagingSenderId: "1044132090983",
	appId: "1:1044132090983:web:887ab1c8942fac150470c2",
	measurementId: "G-4PJBT50ENN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth=getAuth(app)
export {auth}