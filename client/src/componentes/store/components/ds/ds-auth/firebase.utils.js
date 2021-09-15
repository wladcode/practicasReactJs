import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBtnGTY3K0awRsuq4-o3f7ODVYBcc8wpEM",
  authDomain: "diamond-soft-auth-db.firebaseapp.com",
  projectId: "diamond-soft-auth-db",
  storageBucket: "diamond-soft-auth-db.appspot.com",
  messagingSenderId: "33600603767",
  appId: "1:33600603767:web:a0a5ed7cb1be2c9ced2872",
};

// Initialize Firebase
firebase.initializeApp(config);

export const firestore = firebase.firestore();

export const auth = firebase.auth();
auth.languageCode = "es";

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const getUserProfileDocument = async (userAuth) => {
  if (!userAuth) return null;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const userShot = await userRef.get();

  console.log("USERHOT: ", userShot.id);
  console.log("USERHOT: ", userShot.data());
  /*
  const collectionRef = firestore.collection("users");
  const collectionShot = await collectionRef.get();
  console.log({colection: collectionShot.docs.map(doc => doc.data())})
*/

  if (userShot.exists) {
    return {
      id: userShot.id,
      ...userShot.data(),
    };
  }

  return null;
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  //console.log("USER: ", userAuth);
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const userShot = await userRef.get();

  if (!userShot.exists) {
    console.log("CREANDO USUARIO: ", userAuth);
    const createdAt = new Date();
    const { name, email, phoneNumber, photoURL } = userAuth;

    const dataToSafe = {
      name,
      email,
      phoneNumber,
      photoURL,
      createdAt,
    };

    if (additionalData) {
      console.log("ADITIONAL DATA:", additionalData);
      console.log("ADITIONAL DATA:", additionalData.fullname);
      dataToSafe.name = additionalData.fullname;
    }

    try {
      console.log("DATA FOR SAVE: ", dataToSafe);
      await userRef.set(dataToSafe);
    } catch (error) {
      console.log("error creating users: ", error.message);
    }
  } else {
    console.log("USUARIO YA EXISTE EN BDD");
  }

  return userRef;
};

export const signInWithGoogle = async () => {
  try {
    const result = await auth.signInWithPopup(googleProvider);

    const user = result.user;

    const userRef = await createUserProfileDocument(user);

    console.log("USUARIO LOGUEADO: ", userRef);

    return userRef;
  } catch (error) {
    console.log("ERROR en loguin con google: ", error);
    return;
  }
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();

      resolve(userAuth);
    }, reject);
  });
};

export default firebase;
