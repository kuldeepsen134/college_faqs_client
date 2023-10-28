import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDGr0BICmyQC0kin957Lt4zZXdtBHQy6i8",
  authDomain: "collegefaqs-ed824.firebaseapp.com",
  projectId: "collegefaqs-ed824",
  storageBucket: "collegefaqs-ed824.appspot.com",
  messagingSenderId: "298273531248",
  appId: "1:298273531248:web:7b293be48d4ce2ecbb9bb5",
};
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
