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
  const handlerofcart =(id)=>{
    console.log("cart"+id)
  }
  return (
    <div>
      <Navbar />

      <div>
        
        <table className="table table-dark table-striped">
          <thead className="">
            <tr>
              <th scope="col">s/no</th>
              <th scope="col">isbn</th>
              <th scope="col">title</th>
              <th scope="col">author</th>
              <th scope="col">operation</th>
            </tr>
          </thead>
          {currentItems?.map((val, index) => (
            <tbody >
              <tr>
                <th scope="row">{originalIndexCount+index}</th>
                <td>{val.isbn}</td>
                <td>{val.title}</td>
                <td>{val.author}</td>
                <td><svg onClick={()=>handlerofcart(index)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16">
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z"/>
</svg></td>
              </tr>
            </tbody>
          ))}
          
        </table>
        <div className="d-flex align-item-center justify-content-center gap-5 ">
        <button onClick={handlePrevPage} disabled={currentPage === 1} className="btn btn-warning active">Previous</button>
        <p className="btn-warning px-2 active">Page {currentPage}</p>
      <button onClick={handleNextPage} disabled={indexOfLastItem >= book?.books?.length} className="btn btn-warning active ">Next</button>
      </div>
      </div>
    </div>
  );
}

export default Book;
