import React, { useState } from 'react';
import '../../styles/home/content.css'
const ProductCard = ({product}) => {
    const [currentSize, setCurrentSize] = useState(product.sizes[0])
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
            {product.sizes.map( size => <div>{size.size}</div>)}
            </div>
            <div className='item-price-parent'>
            <div className='item-price'>Item Price</div>
            <div>
            <del>€{currentSize.oldPrice}</del>
            <span>€{currentSize.price}</span>
            </div>
            <button>Add To Cart</button>
            </div> 

        </div>
    );
}

export default ProductCard;
