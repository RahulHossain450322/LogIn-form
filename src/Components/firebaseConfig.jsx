// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBU4LWgXiz0eEbi1Ze_NtjuUct_UJ3WVhE",
  authDomain: "fir-practice-cc303.firebaseapp.com",
  projectId: "fir-practice-cc303",
  storageBucket: "fir-practice-cc303.appspot.com",
  messagingSenderId: "23037480997",
  appId: "1:23037480997:web:593a7acae9b4fd10452fcc",
  measurementId: "G-HJTFQGGBXR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;