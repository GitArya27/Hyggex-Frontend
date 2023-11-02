import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDUOQ6HRQzq8zLuWkDiac_XnYW_AEv7WoQ",
  authDomain: "hyggex-f50b8.firebaseapp.com",
  projectId: "hyggex-f50b8",
  storageBucket: "hyggex-f50b8.appspot.com",
  messagingSenderId: "142951014931",
  appId: "1:142951014931:web:d0aef43ae86edf5fa515e6"
};
const apps = initializeApp(firebaseConfig);
const auth = getAuth(apps);

export { auth };
