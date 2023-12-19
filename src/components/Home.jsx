import React from 'react'
import Products from './Products'
import Cart from './Cart'

const Home = () => {
  return (
    <div style={{"display":"flex"}}>
      <Products />
      <Cart />
    </div>
  )
}

export default Home