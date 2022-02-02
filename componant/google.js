import { signInWithPopup } from "firebase/auth";
import { gprovider } from "./auth";
import { auth } from "./client";

export const signIngoogle = async () => {
  const result = await signInWithPopup(auth, gprovider);
  console.log("hello");
  console.log(result.user);
  // const credential = FacebookAuthProvider.credentialFromResult(result);
  // const accessToken = credential.accessToken;
};
