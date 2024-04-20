import React, { useState } from "react";
import Navbar from "../componant/navbar";
import { signIn } from "../componant/facebook";
import { signIngoogle } from "../componant/google";
import { signInEmail } from "../componant/auth";
import { useRouter } from "next/dist/client/router";


function Login(props) {
  const [email, setEmail] = useState("");
  const [passowrd, setPassword] = useState("");
  const router = useRouter();
  const submithandler = (e) => {
    e.preventDefault();
    // console.log(email, passowrd);
    const IsSign = signInEmail(email, passowrd);
    if (IsSign) {
      router.push('/');
    }


  };
  const signInwithgoogle = () => {
    const isLogin = signIngoogle();

    if (isLogin) {

      router.push('/')
    }
  }
  return (
    <>
      {" "}
      <Navbar />
      <div className="container">
        <div className="d-flex justify-content-center h-100 mt-5">
          <div className="card">
            <div className="card-header">
              <h3>Sign In</h3>
              <div className="d-flex justify-content-end social_icon">
                <span classNameName="m-2">
                  <i
                    className="fab fa-facebook-square"
                    onClick={() => signIn()}
                  ></i>
                </span>
                <span classNameName="m-2">
                  <i
                    className="fab fa-google-plus-square"
                    onClick={() => signInwithgoogle()}
                  ></i>
                </span>
                {/* <span classNameName="m-2">
                  <i className="fab fa-twitter-square"></i>
                </span> */}
              </div>
            </div>
            <div className="card-body">
              <form onSubmit={(e) => submithandler(e)}>
                <div className="input-group form-group m-1">
                  <div className="input-group-prepend">
                    <span className="input-group-text m-1">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                  <input
                    className="m-2"
                    type="text"
                    className="form-control"
                    placeholder="username"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div className="input-group form-group m-1">
                  <div className="input-group-prepend">
                    <span className="input-group-text m-1">
                      <i className="fas fa-key"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    className="form-control m-1"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={passowrd}
                  />
                </div>
                <div className="row align-items-center remember">
                  <input type="checkbox" />
                  Remember Me
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Login"
                    className="btn float-right login_btn"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
