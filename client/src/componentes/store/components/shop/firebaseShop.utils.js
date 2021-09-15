import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQdPj0hCSZLH8_GRx59dY0tR10caGkrYM",
  authDomain: "diamoncode-store.firebaseapp.com",
  projectId: "diamoncode-store",
  storageBucket: "diamoncode-store.appspot.com",
  messagingSenderId: "1014714367057",
  appId: "1:1014714367057:web:1b3d4c5e55e28ad3f54c70",
};

// Initialize Firebase
const storeApp = firebase.initializeApp(firebaseConfig, "secondary");

export const firestoreStoreApp = storeApp.firestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestoreStoreApp.collection(collectionKey);

  const batch = firestoreStoreApp.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc(); //Para que firebase generar un id
    batch.set(newDocRef, obj); //Agrega el nuevo documento al batch
  });

  return await batch.commit(); // Ejecuta el batch
};

export const convertCollectionSnapshotToMap = (shopData) => {
  const transformedCollection = shopData.docs.map((doc) => {
    //.docs para retornar todos los documentos
    const { title, items } = doc.data(); //.data para obtener la data del documento

    return {
      routerName: encodeURI(title.toLowerCase()),
      id: doc.id, // El id se obtiene del objeto snapsho del documento
      title,
      items,
    };
  });


  console.log("transformedCollection: ", transformedCollection);

 return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection
    return accumulator;
  }, {})
};

export default "";
