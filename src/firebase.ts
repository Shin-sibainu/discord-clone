import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBRV5jJRu7oQoQ9hNcmvcVdT6IzvvD7BF4",
  authDomain: "discord-clone-83b08.firebaseapp.com",
  projectId: "discord-clone-83b08",
  storageBucket: "discord-clone-83b08.appspot.com",
  messagingSenderId: "393399833089",
  appId: "1:393399833089:web:f60b51803644790a16e600",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
// export default db;
