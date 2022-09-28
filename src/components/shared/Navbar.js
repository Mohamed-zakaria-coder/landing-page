import React from 'react';
import {BsListNested} from 'react-icons/bs';
import "../../styles/navbar.css";
import { useState, useEffect } from 'react';
const Navbar = () => {
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
    return (
        <div className={hState}>
            <div className="logo">
                <p>Bailo</p>
            </div>
            <div className='list-icon'>
                <BsListNested />
            </div>
        </div>
    );
}

export default Navbar;
