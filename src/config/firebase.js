import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCOOzdMOFWYgJgICDYLwIjWh85dCS9LXp0",
  authDomain: "tiktok---jornada-e7396.firebaseapp.com",
  projectId: "tiktok---jornada-e7396",
  storageBucket: "tiktok---jornada-e7396.appspot.com",
  messagingSenderId: "34426231852",
  appId: "1:34426231852:web:2b44d3c7bb905984d68589",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
