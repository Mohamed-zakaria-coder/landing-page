import React, { useState } from 'react'
import '../../styles/home/modal.css'
export default function Modal({ChangeModalState, currentSize, img}) {
    const [quantity, setQuantity] = useState(1)
    function handleChange(e){
        setQuantity(e.target.value)
    }
  return (
    <div className='modal-container'>
    <div className='modal'>
    <h4>Select Product Quantity</h4>
    <div className='product-img-parent'>
    <img src={img} alt='product-img' className='product-img'/>
    </div>
    <div>Size: {currentSize.size}</div>
    <div>Price: {currentSize.price}</div>
    <label htmlFor="quantity">Quantity</label>
    <select id='quantity' name='quantity' onChange={(e) => handleChange(e)}>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
    </select>
    <hr/>
    <div>Total Price: {currentSize.price * quantity}</div>
    <div className='btn-parent'>
    <button>Continue</button>
    </div>
      <span className="close" onClick={() => ChangeModalState(false)}>×</span>
    </div>

    </div>
  )
}
