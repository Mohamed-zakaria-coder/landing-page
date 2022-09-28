import React from 'react';
import "../../styles/home/content.css"

const InfoCard = () => {
  return (
    <div className='content'>
      <div className='content-img-parent'>
        <img
          src="https://ae01.alicdn.com/kf/S96f1bc08ee80411d92e9e5669aa773b36/Neo-Hair-Lotion-Herbs-100-Natural-Treatment-Spray-Stop-Hair-Loss-Root-BEARD-SIDEBURNS-LONGER-Nutrients.jpg"
          alt=""/>
      </div>
      <h3>Hair Lotion</h3>
      <p className='product-headline'>Hair Lotion For Your Hair Health</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam quam
        delectus rerum atque voluptas aut tempore culpa eum soluta! Quibusdam porro
        aliquid sit repellendus cupiditate quas numquam aut, libero laborum.</p>

    </div>
  );
}

export default InfoCard;
