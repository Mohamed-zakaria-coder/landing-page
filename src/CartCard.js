import React from 'react'

export default function CartCard({product}) {
  return (

    <div className='cartcard'>
      <div className='img-parent'>
        <img src={product.img} alt={product.name} />
      </div>
      <div className="card-info">
        <h4>{product.name}</h4>
        <p>{product.size}</p>
        <p>{product.price} × {product.quantity} = {product.price * product.quantity}</p>
      </div>
    </div>
  )
}
