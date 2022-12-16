import React, { useEffect, useState } from 'react'

import CartProductCard from '../../components/CartProductCard/CartProductCard'
import Footer from '../../components/shared/Footer/Footer'
import Header from '../../components/shared/Header/Header'

const Cart = () => {
  const [items, setItems] = useState([])
  
  useEffect(() => {
    let cartitems = localStorage.getItem("cartItems")
    if (cartitems) {
      cartitems = JSON.parse(cartitems)
      setItems(cartitems)
    }
  },[])
  return (
    <div>
      <Header />
      {items.map((i, index)=> {
        return (
          <CartProductCard items={i} key={index} />
        )
      })}
      <Footer />
    </div>
  )
}

export default Cart