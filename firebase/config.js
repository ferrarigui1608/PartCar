import dotEnv from 'dotenv'
dotEnv.config()

const firebaseConfig = {
    apiKey: "AIzaSyDMX-_dpTe-3IQqvG45Z29pu-auOcOCzS8",
    authDomain: "partcar-48260.firebaseapp.com",
    projectId: "partcar-48260",
    storageBucket: "partcar-48260.appspot.com",
    messagingSenderId: "1054238435394",
    appId: "1:1054238435394:web:09f27028a2fb9a7111e5db",
    measurementId: "G-8RRSJL6Z1R"
  };

export default firebaseConfig


const database = firebase.database();
