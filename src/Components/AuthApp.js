import * as firebase from "@firebase/app";
import { getAuth } from "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCUY23Jtj8dp-FAdgeVUjuCvSlNL2IAqoE",
  authDomain: "multi-vendor-marketplace-d9f91.firebaseapp.com",
  projectId: "multi-vendor-marketplace-d9f91",
  storageBucket: "multi-vendor-marketplace-d9f91.appspot.com",
  messagingSenderId: "762414342109",
  appId: "1:762414342109:web:954aee9a4df59b651e6034",
  measurementId: "G-12VK8BY4V1"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };