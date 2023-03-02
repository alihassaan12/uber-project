import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAa4lw-3FJVYyDrc4rLoGid2JAokDkF4wc",
  authDomain: "uber-app-6ad01.firebaseapp.com",
  projectId: "uber-app-6ad01",
  storageBucket: "uber-app-6ad01.appspot.com",
  messagingSenderId: "862665642171",
  appId: "1:862665642171:web:d24f0fdc0a86b3a5fe199e",
  measurementId: "G-D30TGFK84T",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage();

export const provider = new GoogleAuthProvider();
export default app;
