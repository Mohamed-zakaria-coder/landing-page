import React, {useState, useEffect} from 'react'
import '../../styles/home/cart.css'
import CartCard from '../../CartCard'
export default function Cart({ChangeCartState}) {
    const [products, setProducts] = useState()
    useEffect(() => {
        setProducts(JSON.parse(localStorage.getItem("products")))
    }, [])
  return (
    <div className='cart-container'>
    <div className = "cart">
        {(products && products.map(product =>  {
            return(
            <CartCard product={product} />
            )
        }))
        || <div className='empty'>
            <p>The Cart Is Empty</p>
        </div>
        }
    <span className="close" onClick={() => ChangeCartState(false)}>×</span>
    </div>
    </div>
  )
}
