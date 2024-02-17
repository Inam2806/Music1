import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqYUj19HcsM_RIUKW6JwKmyzgtF9_ZttU",
  authDomain: "musicweb-eb92d.firebaseapp.com",
  projectId: "musicweb-eb92d",
  storageBucket: "musicweb-eb92d.appspot.com",
  messagingSenderId: "576796434073",
  appId: "1:576796434073:web:fe6cebdec442448e3d6208"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
