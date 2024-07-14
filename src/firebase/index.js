import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBaCl9yStY5_sxejb0Km_rQPfxeRcXscBo",
  authDomain: "interneepk-a6cec.firebaseapp.com",
  projectId: "interneepk-a6cec",
  storageBucket: "interneepk-a6cec.appspot.com",
  messagingSenderId: "537028686404",
  appId: "1:537028686404:web:de40d341c14a66eb86c211"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
