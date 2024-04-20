import React from "react";
import Link from "next/link";
import Login from "./login";
import login from "./login";
import handleSignout from "./logout";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./client";
function Navbar(props) {
  const [user] = useAuthState(auth);
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border ">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          BOOK4YOU
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse  d-flex justify-content-center "
          id="navbarNav"
        >
          <ul className="navbar-nav  ">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link active" aria-current="page">
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/book">
                <a className="nav-link">Books</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about">
                <a className="nav-link">About</a>
              </Link>
            </li>
            {!user ? (
              <li className="nav-item">
                {" "}
                <Link href="/login">
                  <a className="nav-link">Login</a>
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                {" "}
                <Link href="/login">
                  <a className="nav-link" onClick={() => handleSignout()}>
                    logout
                  </a>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
