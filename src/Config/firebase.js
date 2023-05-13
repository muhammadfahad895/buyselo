import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  setDoc,
  addDoc,
  collection,
  query,
  where,
  getDocs,
  getDoc,
} from "firebase/firestore";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import swal from "sweetalert";
import { useState } from "react";

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
const storage = getStorage(app);

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

export const createPostAd = async ({
  title,
  description,
  price,
  location,
  name,
  category,
  images,
  user,
}) => {
  try {
    await addDoc(collection(db, "ad"), {
      title,
      description,
      price,
      location,
      name,
      category,
      images,
      user,
    });
    return true;
  } catch ({ message }) {
    swal("", `${message}`, "error");
  }
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

export const uploadImage = async (file) => {
  const imageRef = await ref(storage, "pics/" + file.name);
  const uploadBytesRes = await uploadBytes(imageRef, file);
  const url = await getDownloadURL(uploadBytesRes.ref);
  return url;
};

export const getAllAdsData = async () => {
  try {
    const q = query(collection(db, "ad"));
    const querySnapshot = await getDocs(q);

    let arr = [];
    let obj = {};
    querySnapshot.forEach((doc) => {
      obj = { ...doc.data() };
      obj.docId = doc.id;
      arr.push(obj);
    });
    return {
      status: "success",
      data: arr,
    };
  } catch (error) {
    console.log(error.message);
    return {
      status: "error",
      error: error.message,
    };
  }
};

export const getAd = async (id) => {
  const docRef = doc(db, "ad", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
};

// export const filteredData = async (user) => {
//   const filterData = collection(db, "ad");
//   const q = query(filterData, where(user, "==", "user"));
//   console.log(q);

//   const querySnapshot = await getDocs(q);
//   console.log(getDocs(q));
//   querySnapshot.forEach((doc) => {
//     return doc.data();
//     // console.log("doc.data", doc.data);
//   });
// };
export const filterDataByUserId = (userId) => {
  const database = firebaseConfig.database();
  const ref = database.ref("users");
  const query = ref.orderByChild("userId").equalTo(userId);

  return query
    .once("value")
    .then((snapshot) => {
      const filteredData = [];
      snapshot.forEach((childSnapshot) => {
        filteredData.push(childSnapshot.val());
      });
      return filteredData;
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
};
