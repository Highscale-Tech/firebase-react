import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,

  authDomain: "email-automator-4641f.firebaseapp.com",

  projectId: "email-automator-4641f",

  storageBucket: "email-automator-4641f.appspot.com",

  messagingSenderId: "638525177014",

  appId: "1:638525177014:web:54c110e90a64426cb0ba17",
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
const app = initializeApp(config);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName
        ? result.user.displayName
        : "John Doe";
      const email = result.user.email ? result.user.email : "john@doe.com";
      const profilePic = result.user.photoURL ? result.user.photoURL : "";

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};
export const db = getFirestore(app);
