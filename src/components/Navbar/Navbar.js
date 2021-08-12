import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

import "./styles.scss";
import "../../App.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
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
      <nav className={"Navbar"}>
        <div className={"NavbarContainer"}>
          <Link to="/" className={"NavbarLogo"} onClick={closeMobileMenu}>
            BeautyFace
            <i class="fab fa-pagelines"></i>
          </Link>
          <div className={"MenuIcon"} onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "NavMenu active" : "NavMenu"}>
            <li className={"NavItem"}>
              <Link to="/" className={"NavLinks"} onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className={"NavItem"}>
              <Link
                to="/services"
                className={"NavLinks"}
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className={"NavItem"}>
              <Link
                to="/products"
                className={"NavLinks"}
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                to="/sign-up"
                className={"nav-links-mobile"}
                onClick={closeMobileMenu}
              >
                Sign Up
                <i class={"fas fa-user-circle"}></i>
              </Link>
            </li>
          </ul>
          {button && (
            <Button className={"SignUpBtn"} >
              SIGN UP{" "}
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
