import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyDGr0BICmyQC0kin957Lt4zZXdtBHQy6i8",
//   authDomain: "collegefaqs-ed824.firebaseapp.com",
//   projectId: "collegefaqs-ed824",
//   storageBucket: "collegefaqs-ed824.appspot.com",
//   messagingSenderId: "298273531248",
//   appId: "1:298273531248:web:7b293be48d4ce2ecbb9bb5",
// };

const firebaseConfig = {
  apiKey: "AIzaSyCtAMPS0SCEoE1gx2lq8Fqjle6KjbXQMBQ",
  authDomain: "college-faqs.firebaseapp.com",
  projectId: "college-faqs",
  storageBucket: "college-faqs.appspot.com",
  messagingSenderId: "605418429079",
  appId: "1:605418429079:web:8b2905b9512ec2d202a7d2",
  measurementId: "G-4Z8EXY5H3R"
};
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
