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
import { useState } from "react/cjs/react.development";

function Book(props) {
  const [book, setbook] = useState();
  const fetchbooks = () => {
    fetch("https://bvaughn.github.io/js-search/books.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setbook(data);
      })
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    fetchbooks();
  }, []);
  return (
    <div>
      <Navbar />

      <div>
        <table class="table bg-secondary">
          <thead>
            <tr>
              <th scope="col">s/no</th>
              <th scope="col">isbn</th>
              <th scope="col">title</th>
              <th scope="col">author</th>
            </tr>
          </thead>
          {book?.books.map((val, index) => (
            <tbody>
              <tr>
                <th scope="row">{index}</th>
                <td>{val.isbn}</td>
                <td>{val.title}</td>
                <td>{val.author}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Book;
