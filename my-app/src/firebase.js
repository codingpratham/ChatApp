import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getStorage} from "firebase/storage"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPMw3pEZ8_fJgsZ5uoB4kcWceEt0JLYkw",
  authDomain: "connectify-1-6d387.firebaseapp.com",
  projectId: "connectify-1-6d387",
  storageBucket: "connectify-1-6d387.appspot.com",
  messagingSenderId: "224556891879",
  appId: "1:224556891879:web:b63824edf39ba6c84cac42"
};

export const app = initializeApp(firebaseConfig);
export const auth=getAuth()
export const storage = getStorage();
export const db=getFirestore()