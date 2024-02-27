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
  const [currentPage, setCurrentPage] = useState(1);
  const [number, setnumber] =useState("");

  const itemsPerPage = 16; // Change this as per your requirement

  // Calculate the index range of items to display for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = book?.books?.slice(indexOfFirstItem, indexOfLastItem);
  const originalIndexCount = (currentPage - 1) * itemsPerPage + 1;
  console.log(currentItems)
  const handleNextPage = () => {
    
    setCurrentPage(currentPage + 1);

  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

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
        
        <table className="table bg-secondary">
          <thead className="">
            <tr>
              <th scope="col">s/no</th>
              <th scope="col">isbn</th>
              <th scope="col">title</th>
              <th scope="col">author</th>
            </tr>
          </thead>
          {currentItems?.map((val, index) => (
            <tbody >
              <tr>
                <th scope="row">{originalIndexCount+index}</th>
                <td>{val.isbn}</td>
                <td>{val.title}</td>
                <td>{val.author}</td>
              </tr>
            </tbody>
          ))}
        </table>
        <div className="d-flex align-item-center justify-content-center gap-5">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
        <p>Page {currentPage}</p>
      <button onClick={handleNextPage} disabled={indexOfLastItem >= book?.books?.length}>Next</button>
      </div>
      </div>
    </div>
  );
}

export default Book;
