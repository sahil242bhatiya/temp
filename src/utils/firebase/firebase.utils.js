import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDX8i-bDVUy56cY_YjLpq7nOMisq_GKubw",
  authDomain: "temp-react-training.firebaseapp.com",
  projectId: "temp-react-training",
  storageBucket: "temp-react-training.appspot.com",
  messagingSenderId: "975613330157",
  appId: "1:975613330157:web:d499248d1b6cb10b0a42e4",
  measurementId: "G-1MZ2RY0EQM",
};

const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
