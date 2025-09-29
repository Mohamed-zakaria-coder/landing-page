import React from "react";
import { BsListNested } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";
import "../../styles/navbar.css";
import { useState, useEffect } from "react";
import Cart from "../home/Cart";
import { Link } from "react-scroll";

import rubyImg from "../../images/RubyCosmo.png";

const Navbar = ({ productsCount, showSuccess, setUpVal, upVal }) => {
  const [isListOpen, setIsListOpen] = useState(false);

  const [showCart, setShowCart] = useState(false);
  const [hState, sethState] = useState("top");
  useEffect(() => {
    var lastVal = 0;
    window.onscroll = function () {
      let y = window.scrollY;
      if (y > lastVal) {
        sethState("down");
      }
      if (y < lastVal) {
        sethState("up");
      }
      if (y === 0) {
        sethState("top");
      }
      lastVal = y;
    };
  }, []);
  function ChangeCartState(modalExistance) {
    setShowCart(modalExistance);
  }
  function handleShowCart() {
    setShowCart(true);
  }
  return (
    <div className={hState}>
      <div className="logo">
        <img src={rubyImg} alt="ruby-img" className="ruby-logo" />
        <p>RubyCosmo</p>
      </div>
      <div className="list-icon">
        <div className="cart-contianer">
          {productsCount && productsCount !== 0 && (
            <div className="total-count">{productsCount}</div>
          )}
          <BsCart3 className="cart-icon" onClick={handleShowCart} />
        </div>
        <div className="navbar-list">
          <BsListNested
            onClick={() => setIsListOpen(!isListOpen)}
            className="list-icon"
          />
          {isListOpen && (
            <div className="sections-list">
              <ul>
                <li>
                  <Link
                    to="home"
                    smooth={true}
                    duration={400}
                    onClick={() => setIsListOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="products"
                    smooth={true}
                    duration={400}
                    onClick={() => setIsListOpen(false)}
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="features"
                    smooth={true}
                    duration={400}
                    onClick={() => setIsListOpen(false)}
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    to="carousel"
                    smooth={true}
                    duration={400}
                    onClick={() => setIsListOpen(false)}
                  >
                    Ratings
                  </Link>
                </li>
                <li>
                  <Link
                    to="whyus"
                    smooth={true}
                    duration={400}
                    onClick={() => setIsListOpen(false)}
                  >
                    Why us
                  </Link>
                </li>
                <li>
                  <Link
                    to="hero"
                    smooth={true}
                    duration={400}
                    onClick={() => setIsListOpen(false)}
                  >
                    Hero
                  </Link>
                </li>
                <li>
                  <Link
                    to="faq"
                    smooth={true}
                    duration={400}
                    onClick={() => setIsListOpen(false)}
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      {showCart && (
        <Cart
          upVal={upVal}
          setUpVal={setUpVal}
          ChangeCartState={ChangeCartState}
          showSuccess={showSuccess}
        />
      )}
    </div>
  );
};

export default Navbar;
