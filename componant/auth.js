import { FacebookAuthProvider } from "firebase/auth";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import firebase from "firebase/app";
import { auth } from "./client";

export const signInEmail = async (email, password) => {
  const result = await createUserWithEmailAndPassword(auth, email, password);
  console.log(result.user);
};

export const provider = new FacebookAuthProvider();
export const gprovider = new GoogleAuthProvider();
