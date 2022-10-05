import React, {useState, useEffect} from 'react'
import '../../styles/home/cart.css'
import CartCard from '../../CartCard'
import Order from './Order'
import {BiRightArrowAlt} from "react-icons/bi"
import { motion } from 'framer-motion'
export default function Cart({ChangeCartState,showSuccess}) {
    const [orderVisible, setOrderVisible] = useState(false)
    function ChangeOrderVisible(){
        setOrderVisible(true)
        document.getElementById('card-animation').classList.add('animate-to-left')
    }
    const [products, setProducts] = useState()
    useEffect(() => {
        setProducts(JSON.parse(localStorage.getItem("products")))
    }, [])
  return (
    <div className='cart-container'>
    <div className = "cart">
        <h4 className= "cart-header">Cart</h4>
        <div id='card-animation'> {(products && products.map(product =>  {
            return(
            <motion.div initial={{x : 0}} exit={{x: -2000}} transition = {{duration: 1}}>
            <CartCard product={product}/>
            </motion.div>
            )
        }) &&
        <hr />
        
        )
        || <div className='empty'>
            <p>The Cart Is Empty</p>
        </div>
        }
        <br />
        
        {products && <p className='total-price'>Total: {products.reduce((total,curr) => {
            return total + (curr.quantity * curr.price)
        }, 0)}</p>}</div>  { orderVisible && <motion.div initial={{x: 2000}} animate={{x:0}} transition={{duration: 1, type: 'spring', delay: 1}} ><Order ChangeCartState={ChangeCartState} showSuccess={showSuccess}/></motion.div>}
        
         <div className='order-parent'>
         {!orderVisible && products && <button onClick={ChangeOrderVisible}>Continue <BiRightArrowAlt size={16}/></button>}
         </div>
    <span className="cart-close" onClick={() => ChangeCartState(false)}>×</span>
    </div>
    </div>
  )
}
