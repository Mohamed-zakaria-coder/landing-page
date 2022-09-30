import React, { useState } from 'react';
import '../../styles/home/content.css'
import Modal from './Modal';
const ProductCard = ({product}) => {
    const [currentSize, setCurrentSize] = useState(product.sizes[0])
    function handleChange(e){
        setCurrentSize(product.sizes[e.target.getAttribute('size-id')])

    }
    const [modalState, setModalState] = useState(false)
    function ChangeModalState(modalExistance){
        setModalState(modalExistance)
    }
    return (
        <div className='content'>
            <div className='content-img-parent'>
                <img src={product.img} alt={product.name}/>
            </div>
            <h3>{product.name}</h3>
            <p className='product-headline'>{product.headline}</p>
            <p>{product.description}</p>
            <h4>Select Size</h4>
            <div className='select-parent'>
              {console.log(product.sizes)}
            {product.sizes.map( (size, index) => <div onClick={(e) => handleChange(e)} size-id={index}>{size.size}</div>)}
            </div>
            <div className='item-price-parent'>
            <div className='item-price'>Item Price</div>
            <div>
            <del>€{currentSize.oldPrice}</del>
            <span>€{currentSize.price}</span>
            </div>
            <button onClick={() => ChangeModalState(true)}>Add To Cart</button>
            </div> 
            {modalState &&  <Modal img={product.img} ChangeModalState={ChangeModalState}  currentSize={currentSize}/>}


        </div>
    );
}

export default ProductCard;
