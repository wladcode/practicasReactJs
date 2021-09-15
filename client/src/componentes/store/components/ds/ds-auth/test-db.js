import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();


//Las siguientes formas de llamar a los items son identicas
firestore.collection("users").doc("EZnt6HEDVnxlBv4476G2").collection("cartItems").doc("LMN0Qek6Td9GY2fRDWlm");
firestore.doc("/users/EZnt6HEDVnxlBv4476G2/cartItems/LMN0Qek6Td9GY2fRDWlm");
firestore.collection("/users/EZnt6HEDVnxlBv4476G2/cartItems");