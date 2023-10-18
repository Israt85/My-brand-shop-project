// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQlUYYOdLOmsFPGLxCjds_TGX6Jo_uoAQ",
  authDomain: "my-brand-shop.firebaseapp.com",
  projectId: "my-brand-shop",
  storageBucket: "my-brand-shop.appspot.com",
  messagingSenderId: "722724265772",
  appId: "1:722724265772:web:fe3fa405a5bed974cf5689"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;