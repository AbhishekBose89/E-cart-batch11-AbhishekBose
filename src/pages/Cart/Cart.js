import './Cart.css'

import { cartSelector, getTotals } from '../../reducers/cartReducer';
import { useDispatch, useSelector } from 'react-redux'

import CartProductCard from '../../components/CartProductCard/CartProductCard'
import Header from '../../components/shared/Header/Header'
import { Link } from 'react-router-dom'
import React from 'react'
import { clearCart } from '../../reducers/cartReducer'
import { useEffect } from 'react'

// import {  useState } from 'react'





// import Footer from '../../components/shared/Footer/Footer'


const Cart = () => {
  // const [items, setItems] = useState([])

  // useEffect(() => {
  //   let cartitems = localStorage.getItem("cartItems")
  //   if (cartitems) {
  //     cartitems = JSON.parse(cartitems)
  //     setItems(cartitems)
  //   }
  // },[])

const dispatch=useDispatch()
  const items = useSelector(cartSelector);
  // const items= useSelector(state =>state.cartItems)

  useEffect(() => {
    dispatch(getTotals())
  },[items,dispatch])

  const handleClearCart = () => { dispatch(clearCart()) }
  
  
  return (
    <>
      <Header />
      <div className='cart-container'>
        <h2>Shopping Cart</h2>
        {
          items.cartItems.length === 0 ? (<div className="cart-empty">
            <p>Your cart is currently empty</p>
            <div className="start-shopping">
              <Link to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-arrow-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                  />
                </svg>
                <span>Start Shopping</span>
              </Link>
            </div>
          </div>) : (<div>
            <div className="titles">
              <h3 className="product-title">Product</h3>
              <h3 className="price">Price</h3>
              <h3 className="quantity">Quantity</h3>
              <h3 className="total">Total</h3>
            </div>
            <div className="cart-items">
              {
                 items.cartItems?.map((item) => {
                  return (
                    <CartProductCard items={item} key={item.id} />
                  )
                })
              }
            </div>
            <div className="cart-summary">
              <button className="clear-btn" onClick={() => handleClearCart()}>
                Clear Cart
              </button>
              <div className="cart-checkout">
                <div className="subtotal">
                  <span>Subtotal</span>
                  <span className="amount">${items.cartTotalAmount}</span>
                </div>
                <p>Taxes and shipping calculated at checkout</p>
                <button>Check out</button>
                <div className="continue-shopping">
                  <Link to="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-arrow-left"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                      />
                    </svg>
                    <span>Continue Shopping</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          )} </div>
    </>
  )
}

export default Cart