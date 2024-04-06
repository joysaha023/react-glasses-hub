 import { initializeApp } from "firebase/app";
 import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCS3meJSw0g1TqaDR4aR3zT7wmNjl5aB7Y",
  authDomain: "react-glasses-hub.firebaseapp.com",
  projectId: "react-glasses-hub",
  storageBucket: "react-glasses-hub.appspot.com",
  messagingSenderId: "168879236658",
  appId: "1:168879236658:web:d3809da9fa9314d42b7e2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;