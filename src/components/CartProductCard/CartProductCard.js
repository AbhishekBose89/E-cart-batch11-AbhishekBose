import './CartProductCard.css'

import React from 'react'

const CartProductCard = (props) => {
  let cartProduct = props.items
  return (
    <div className='cartItems'>
      <img src={cartProduct.image} alt="product-img" />
      <p>{cartProduct.title}</p>
      <p>${cartProduct.price}</p>
    </div>
  )
}

export default CartProductCard