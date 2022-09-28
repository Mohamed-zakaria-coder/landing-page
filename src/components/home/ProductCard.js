import React from 'react';
import '../../styles/home/content.css'
const ProductCard = () => {
    return (
        <div className='content'>
            <div className='content-img-parent'>
                <img src="https://ae01.alicdn.com/kf/S96f1bc08ee80411d92e9e5669aa773b36/Neo-Hair-Lotion-Herbs-100-Natural-Treatment-Spray-Stop-Hair-Loss-Root-BEARD-SIDEBURNS-LONGER-Nutrients.jpg" alt=""/>
            </div>
            <h3>Hair Lotion</h3>
            <p className='product-headline'>Hair Lotion For Your Hair Health</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam quam delectus rerum atque voluptas aut tempore culpa eum soluta! Quibusdam porro aliquid sit repellendus cupiditate quas numquam aut, libero laborum.</p>
            <h4>Select Color</h4>
            <div className='select-parent'>
            <div className='select-one'>S</div>
            <div className='select-two'>M</div>
            <div className='select-three'>L</div>
            </div>
            <div className='item-price-parent'>
            <div className='item-price'>Item Price</div>
            <div>
            <del>€40.00</del>
            <span>€20.00</span>
            </div>
            <button>Add To Cart</button>
            </div> 

        </div>
    );
}

export default ProductCard;
