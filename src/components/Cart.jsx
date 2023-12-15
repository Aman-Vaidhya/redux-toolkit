import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {
    const carts = useSelector((state)=>state.cart);
    const {cart} = carts
    console.log(cart)
  return (
    <div>Cart</div>
  )
}

export default Cart