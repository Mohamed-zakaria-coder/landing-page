import React from 'react';
import {BsListNested} from 'react-icons/bs';
import {BsCart3} from 'react-icons/bs';
import "../../styles/navbar.css";
import { useState, useEffect } from 'react';
import Cart from '../home/Cart';

import rubyImg  from '../../images/WhatsApp_Image_2022-09-29_at_1.41.36_AM-removebg-preview.png'

const Navbar = ({productsCount}) => {
    
    
    
    const [showCart, setShowCart] = useState(false)
    const [hState,sethState] = useState("top")
    useEffect(() => {
        var lastVal = 0
        window.onscroll = function(){
            let y = window.scrollY
            if(y > lastVal){sethState("down")}
            if(y < lastVal) {sethState("up")}
            if(y === 0) {sethState("top")}
            lastVal = y
        }

    }, [])
    function ChangeCartState(modalExistance){
        setShowCart(modalExistance)
    }
    function handleShowCart(){
        setShowCart(true)
    }
    return (
        <div className={hState}>
            <div className="logo">
                <img src={rubyImg} alt="ruby-img" className='ruby-logo' />
                <p>RubyCosmo</p>
            </div>
            <div className='list-icon'>
                <div className='cart-contianer'>
                { productsCount && productsCount !== 0 &&
                <div className="total-count">{productsCount}</div>
                }
                <BsCart3 className='cart-icon' onClick={handleShowCart}/>
                </div>
                <BsListNested />
            </div>
            {showCart && <Cart ChangeCartState={ChangeCartState}/>}
        </div>
    );
}

export default Navbar;
