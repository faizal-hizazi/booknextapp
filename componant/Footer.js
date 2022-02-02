import React from "react";

function Footer(props) {
  return (
    <div>
      <footer>
        <div className="container border">
          <div className="row">
            <div className="col about">
              <h3>About the store</h3>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Become a customer</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Return policy</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
              </ul>
            </div>
            <div className="col language">
              <h3>Language</h3>
              <ul>
                <li>
                  <a href="#">Deutsch</a>
                </li>
                <li>
                  <a href="#">English</a>
                </li>
                <li>
                  <a href="#">Español</a>
                </li>
                <li>
                  <a href="#">Français</a>
                </li>
                <li>
                  <a href="#">Indonesian</a>
                </li>
                <li>
                  <a href="#">Italian</a>
                </li>
                <li>
                  <a href="#">Nederlands</a>
                </li>
                <li>
                  <a href="#">Polnisch</a>
                </li>
                <li>
                  <a href="#">Português</a>
                </li>
                <li>
                  <a href="#">pyccкий</a>
                </li>
                <li>
                  <a href="#">Tiếng Việt</a>
                </li>
                <li>
                  <a href="#">Türkçe</a>
                </li>
              </ul>
            </div>
            <div className="col socail">
              <h3>Get in touch</h3>
              <ul>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <ul>
              <li>
                <a href="#">Terms of purchase</a>
              </li>
              <li>
                <a href="#">Security and privacy</a>
              </li>
              <li>
                <a href="#">Newsletter</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
