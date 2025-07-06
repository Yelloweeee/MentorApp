import {initializeApp} from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCdUV12Rg6rJuZCjyVJzgQJ0nsFW9yTXFo",
  authDomain: "mentorapp-db180.firebaseapp.com",
  projectId: "mentorapp-db180",
  storageBucket: "mentorapp-db180.firebasestorage.app",
  messagingSenderId: "7572184777",
  appId: "1:7572184777:web:07a57176b8f30796d07718",
  databaseURL: "https://mentorapp-db180-default-rtdb.firebaseio.com",
};

export const app = initializeApp(firebaseConfig);