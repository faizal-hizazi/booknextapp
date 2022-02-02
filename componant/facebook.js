import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { provider } from "./auth";
import firebase from "firebase/app";
import { auth } from "./client";

export const signIn = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log("hello");
  } catch (err) {
    console.error(err);
  }
  // const credential = FacebookAuthProvider.credentialFromResult(result);
  // const accessToken = credential.accessToken;
};
// export const signIn = async () => {
//   console.log("hello");
// };
