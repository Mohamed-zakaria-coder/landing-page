import React, { useEffect, useState } from 'react'
import '../../styles/home/order.css'
import { db } from './firebase-config'
import {collection , addDoc} from 'firebase/firestore'

function Order({ChangeCartState , showSuccess}){
    const [orderDetails, setOrderDetails] = useState()
    const orderCollection = collection(db, "Orders")
    function handleChange(e){
       const value = e.target.value
       const name = e.target.name
        setOrderDetails({...orderDetails, [name]: value})

    }
    async function  handleSubmit(e){
        e.preventDefault()
        await addDoc(orderCollection, orderDetails)
        localStorage.setItem('products', JSON.stringify(null))
        ChangeCartState(false) 
        showSuccess()
    }
    
    useEffect(() => {
        setOrderDetails({products: JSON.parse(localStorage.getItem('products'))})

    }, [])
    return(
    <div className= "order">
        <h4>Order Details</h4>
        
        <form className='order-form' onSubmit={(e) => handleSubmit(e)}>
            <input placeholder='Name' type="text" name="name" required minLength={3}  maxLength={30} onChange={(e) => handleChange(e)}/>
            <input placeholder='Phone' type="tel" name="phone" required minLength={11}  maxLength={11} onChange={(e) => handleChange(e)}/>
            <input placeholder='Email' type="email" name="email" maxLength={50} minLength={11} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required onChange={(e) => handleChange(e)}/>
            <textarea placeholder='Enter Your Address' name="address" minLength={8} maxLength={150} required  onChange={(e) => handleChange(e)}></textarea>
        <div>
        <button type='submit' className='submit-order'>Place Order</button>
        </div>
        </form>
        
    </div>
    )
}


export default Order