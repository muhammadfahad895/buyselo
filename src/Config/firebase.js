import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import swal from "sweetalert";

const firebaseConfig = {
  apiKey: "AIzaSyASnDIaNOrtB5nRjxWkMgB8I8r_eLvWi4M",
  authDomain: "buysello.firebaseapp.com",
  projectId: "buysello",
  storageBucket: "buysello.appspot.com",
  messagingSenderId: "218311751145",
  appId: "1:218311751145:web:367ef48f29797858704778",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const auth = getAuth(app);

// const addUserInDb = async (obj) => {
//   await setDoc(doc(db, "users", obj.uid), obj);
// };

export const createUser = async ({ email, password, displayName }) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const uid = userCredential.user.uid;

    await setDoc(doc(db, "users", uid), {
      uid,
      email,
      displayName,
    });
    return userCredential;
  } catch ({ message }) {
    swal("", `${message}`, "error");
  }
};

export const loginUser = async ({ email, password }) => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password,
  );
  const user = userCredential.user;
  return user;
};

export const signOutUser = async () => {
  try {
    await signOut(auth);
    return {
      status: "success",
    };
  } catch (error) {
    console.log(error.message);
    return {
      status: "error",
      error: error.message,
    };
  }
};
