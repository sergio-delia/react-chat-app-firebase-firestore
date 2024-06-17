import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-f2bc1.firebaseapp.com",
  projectId: "reactchat-f2bc1",
  storageBucket: "reactchat-f2bc1.appspot.com",
  messagingSenderId: "751007605531",
  appId: "1:751007605531:web:646c23d8ecd65fa8dd29be"
};


const app = initializeApp(firebaseConfig);

//Attiviamo i servizi di cui abbiamo bisogno
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
