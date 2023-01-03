import './CartProductCard.css'

import { addToCart, decreaseCart, getTotals, removeFromCart } from '../../reducers/cartReducer'

import React from 'react'
import { cartSelector } from '../../reducers/cartReducer'
import { useDispatch } from 'react-redux'
import { useEffect } from "react"
import { useSelector } from 'react-redux'

const CartProductCard = (props) => {
  let dispatch = useDispatch()
  const cart = useSelector(cartSelector)
  let cartItem = props.items
  console.log(cartItem)

  useEffect(() => {
    dispatch(getTotals())
  }, [cart, dispatch])

  const handleRemoveFromCart = (product) => { dispatch(removeFromCart(product)) }
  const handleDecreaseCart = (product) => { dispatch(decreaseCart(product)) }
  const handleAddToCart = (product) => { dispatch(addToCart(product)) }
  return (
    <>
      <div className='cart-item' key={cartItem.id}>
        <div className="cart-product">
          <img src={cartItem.image} alt={cartItem.title} />
          <div>
            <h3 className='cart-product-title'>{cartItem.title}</h3>
            <button onClick={() => handleRemoveFromCart(cartItem)}>
              Remove
            </button>
          </div>
        </div>
        <div className="cart-product-price">${cartItem.price}</div>
        <div className="cart-product-quantity">
          <button onClick={() => handleDecreaseCart(cartItem)}>
            -
          </button>
          <div className="count">{cartItem.cartQuantity}</div>
          <button onClick={() => handleAddToCart(cartItem)}>+</button>
        </div>
        <div className="cart-product-total-price">
          ${cartItem.price * cartItem.cartQuantity}
        </div>
      </div>
    </>
  )
}

export default CartProductCard