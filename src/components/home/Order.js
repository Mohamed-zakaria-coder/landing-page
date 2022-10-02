import React from 'react'


function Order(){
    return(
    <div className= "order">
        <div>
            <input placeholder='Name' type="text"/>
            <input placeholder='Phone' type="tell"/>
            <input placeholder='Email' type="email"/>
            <textarea placeholder='Enter Your Address'></textarea>
        </div>
        <div>
        <button>Send</button>
        </div>
    </div>
    )
}


export default Order