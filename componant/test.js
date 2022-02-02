import React, { useEffect } from "react";
import Navbar from "../componant/navbar";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { getDatabase, ref, get, set, child } from "firebase/database";
import { app } from "../componant/client";

function Book(props) {
  const userId = "1";
  const name = "faizal";
  const email = "faizal@123.com";
  const imageUrl =
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt3107288%2F&psig=AOvVaw1TsF5_KL4nafGKvX7t9-VW&ust=1640800038267000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOC9j63bhvUCFQAAAAAdAAAAABAD ";
  function writeUserData(userId, name, email, imageUrl) {
    const db = getDatabase();
    set(ref(db, "users/" + userId), {
      username: name,
      email: email,
      profile_picture: imageUrl,
    });
  }
  const readUserData = () => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/${userId}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(async () => {
    // console.log("useeffect", db);
    try {
      writeUserData(userId, name, email, imageUrl);
      readUserData();
      const db = getFirestore(app);
      const docRef = await addDoc(collection(db, "user"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815,
      });
      const setref = await setDoc(doc(collection(db, "user")), {
        name: "tokyo",
        state: "CA",
        country: "japan",
        capital: false,
        population: 860000,
        regions: ["west_coast", "norcal"],
      });
      // const delref = await deleteDoc(doc(db, "user", "LOD0lCmcHaVSlGnR7hyA"));
      const querySnapshot = await getDocs(collection(db, "user"));
      querySnapshot.forEach((doc) => {
        console.log(
          `${doc.id} => ${doc.data().first}${doc.data().last}${doc.data().born}`
        );
      });
      const sanfrancisco = doc(db, "user", "fLGGjRNyfmMrtUnHnXEp");
      // const name = "name";
      const updateref = await updateDoc(sanfrancisco, { name: "maxiico" });
      // console.log("Document written with ID: ", docRef.id);
      console.log("update");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }, []);
  return (
    <div>
      <Navbar />
      hdfhd
    </div>
  );
}

export default Book;
