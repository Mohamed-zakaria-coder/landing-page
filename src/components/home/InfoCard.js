import React from 'react';
import "../../styles/home/content.css"
import lotionImg from "../../images/hair-lotion.png"
const InfoCard = () => {
  return (
    <div className='content info-card'>
      <div className='content-img-parent'>
        <img
          src= {lotionImg}/>
      </div>
      <div className ="info">
        <h3>Why us..?!</h3>
        <p>
          Because The Of The Hard-Working we put into our products make them the
          best choice for you. Besides the natural constituents we use in our products
          that will never harm you, the medical knowledge enables us to know what fits
          you, you like, and helps you take care of your lifestyle.</p>
      </div>
    </div>
  );
}

export default InfoCard;
