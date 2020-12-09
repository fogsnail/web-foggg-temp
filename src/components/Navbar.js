import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to="/" className="navbar__logo">
            FOGGG{" "}
            <i
              style={{ marginLeft: "6px" }}
              className="fab fa-affiliatetheme"
            ></i>
            {/* <i class="fab fa-affiliatetheme"></i> */}
          </Link>
          <div className="nav__icon" onClick={() => setClick(!click)}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav__menu active" : "nav__menu"}>
            <li className="nav__item">
              <Link to="/" className="nav__links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/services"
                className="nav__links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/products"
                className="nav__links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/sign-up"
                className="nav__links--mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
