import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../features/cartSlice';

const Cart = () => {
    const carts = useSelector((state)=>state.cart);
    const dispatch = useDispatch();
    const {total} = carts
    const {cart} = carts
    console.log(carts +"total "+total)
    console.log(cart)
  return (
    <div>
      {cart.map((item)=>
      <>
        <div key={item.id}>
          <h1>{item.title}</h1>
          <h6>{item.description}</h6>
          <p><b>{item.price}</b></p>
          <button onClick={()=>dispatch(remove({id:item.id,total:item.price}))}>Remove</button>
        </div>
      </>
      )}
            <h4>Total Amount {total}</h4>
    </div>
  )
}

export default Cart