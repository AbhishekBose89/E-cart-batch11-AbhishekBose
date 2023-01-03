import './ProductCard.css'

import React from 'react'
import { addToCart } from "../../reducers/cartReducer"
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const ProductCard = (props) => {
    let product = props.item;

    let dispatch = useDispatch()
    let nav =useNavigate()
    

    const handleAddtoCart = (product) => {
        // let cartItems = localStorage.getItem("cartItems")
        // if (!cartItems) {
        //     cartItems=[]
        // } else {
        //     cartItems=JSON.parse(cartItems)
        // }
        // cartItems.push(product)
        // localStorage.setItem("cartItems", JSON.stringify(cartItems))
        // props.notify(cartItems.length)

        dispatch(addToCart(product))
        nav("/cart",true)
    }
    return (
        <div>
            < div className="card card-main">
                <h5 className="card-title">{product.title}</h5>
                <hr />
                <img src={product.image} className="card-img-top" alt="productImage" />
                <hr />
                <div className="card-body">
                    <h6>${product.price}</h6>
                    {/* <p className="card-text">{product.description}</p> */}
                    <button className="btn btn-success" onClick={()=>handleAddtoCart(product)}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard