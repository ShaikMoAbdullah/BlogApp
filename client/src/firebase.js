import { initializeApp } from "firebase/app";

import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCu-bzZbjm7-9aCKAgSYi3Pd_Vd2ogMi24",
  authDomain: "blogfusion.firebaseapp.com",
  projectId: "blogfusion",
  storageBucket: "blogfusion.appspot.com",
  messagingSenderId: "893834834897",
  appId: "1:893834834897:web:bdd5433f6e35e9c22926f0",
  measurementId: "G-Q3Q746FKDT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
