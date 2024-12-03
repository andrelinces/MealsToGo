// import * as firebase from "firebase";

// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// const auth = getAuth();

// // export default loginRequest = () =>
// //   signInWithEmailAndPassword(auth, email, password);

// // const auth = getAuth(auth, email, password);

// const loginRequest = (email, password) =>
//   firebase.auth().signInWithEmailAndPassword(email, password);

// authentication.service.js
// import { auth } from "./firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";

export const loginRequest = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);
