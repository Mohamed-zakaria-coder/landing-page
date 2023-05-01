import React from 'react'

export default function CartCard({product, setUpVal}) {
  
  function deleteItem(e){   
    setUpVal(product)
    let products = JSON.parse(localStorage.getItem("products")) && JSON.parse(localStorage.getItem("products")) || []
    products = products.filter(prod => Number(prod.id) !== Number(e.target.id))
    localStorage.setItem("products", JSON.stringify(products))
  }
  
  return (

    <div className='cartcard' id={product.id}>
      <div className='img-parent'>
        <img src={product.img} alt={product.name} />
      </div>
      <div className="card-info">
        <h4>{product.name}</h4>
        <p>Size: ( {product.size} )</p>
        <p>{product.price} × {product.quantity} = {product.price * product.quantity}</p>
        <button className='del-btn' id={product.id} onClick={(e) => deleteItem(e)}>Delete Product</button>
      </div>
    </div>
  )
}
