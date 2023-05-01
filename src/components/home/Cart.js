import React, { useState, useEffect } from "react";
import "../../styles/home/cart.css";
import CartCard from "./CartCard";
import Order from "./Order";
import { BiRightArrowAlt } from "react-icons/bi";
import { motion } from "framer-motion";
export default function Cart({
  ChangeCartState,
  showSuccess,
  setUpVal,
  upVal,
}) {
  const [orderVisible, setOrderVisible] = useState(false);
  function ChangeOrderVisible() {
    setOrderVisible(true);
    document.getElementById("card-animation").classList.add("animate-to-left");
  }
  const [products, setProducts] = useState();

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem("products")));
  }, [upVal]);

  return (
    <div className="cart-container">
      <div className="cart">
        <h4 className="cart-header">Cart</h4>
        <div id="card-animation">
          {" "}
          {products &&
            products.map((product) => {
              return (
                <motion.div
                  initial={{ x: 0 }}
                  exit={{ x: -2000 }}
                  transition={{ duration: 1 }}
                >
                  <CartCard product={product} setUpVal={setUpVal} />
                </motion.div>
              );
            })}
          <br />
          {/* {products && <div>{products.map(product => {
           return( <div className='products-parent-cart'>
            <div>
                <img src={product.img} className='cart-img'/>
                <div>{product.name}</div>
            </div>
            <div>
                <h3>Quantity</h3>
                <div>{product.quantity}</div>
                </div>
                <div>
                  <h3>Price</h3>  
                <div>{product.price}</div>
                </div>
            </div>
           )
        })}</div>} */}
          {products &&
            (products.reduce((total, curr) => {
              return total + curr.quantity * curr.price;
            }, 0) > 0 ? (
              <p className="total-price">
                Total:{" "}
                {products.reduce((total, curr) => {
                  return total + curr.quantity * curr.price;
                }, 0)}
              </p>
            ) : (
              <div className="empty">
                <p>The Cart Is Empty</p>
              </div>
            ))}
        </div>{" "}
        {orderVisible && (
          <motion.div
            initial={{ x: 2000 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, type: "spring", delay: 1 }}
          >
            <Order
              ChangeCartState={ChangeCartState}
              showSuccess={showSuccess}
            />
          </motion.div>
        )}
        {!orderVisible && products && products.reduce((total, curr) => {
              return total + curr.quantity * curr.price;
            }, 0) > 0 && (
              
          <button onClick={ChangeOrderVisible}>
            Continue <BiRightArrowAlt size={16} />
          </button>
        )}
        <span className="cart-close" onClick={() => ChangeCartState(false)}>
          ×
        </span>
      </div>
    </div>
  );
}
