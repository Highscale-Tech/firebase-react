import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,

  authDomain: "email-automator-4641f.firebaseapp.com",

  projectId: "email-automator-4641f",

  storageBucket: "email-automator-4641f.appspot.com",

  messagingSenderId: "638525177014",

  appId: "1:638525177014:web:54c110e90a64426cb0ba17",
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
