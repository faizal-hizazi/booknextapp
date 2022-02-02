import { async } from "@firebase/util";
import { getAuth, signOut } from "firebase/auth";
import { app } from "./client";
const auth = getAuth(app);

const handleSignout = async () => {
  const signout = await signOut(auth);
};
export default handleSignout;
