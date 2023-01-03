import React, { useEffect, useState } from 'react'

import Footer from '../../components/shared/Footer/Footer'
import Header from '../../components/shared/Header/Header'
import ProductCard from '../../components/ProductCard/ProductCard'

const Home = () => {
    const [product, setProduct] = useState([])
    const [error, setError] = useState()
    // const [count,setCount]=useState()

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => {
                setProduct(data)
                setError()
            })
            .catch(err => setError(err))
    }, [])

    // function notifyHome(productCount) {
    //     setCount(productCount) 
    //     }

    return (
        <div>
            <Header
            // headerCount={count}
            />
            <div className='container mt-3'>
                {error && <h2 className='mt-3'>No Products to show</h2>}

                <div className='row'>
                    {product?.map((p, i) => {
                        return (<div key={i} className='col-md-3'>
                            <ProductCard item={p}
                            //   notify={notifyHome}
                            />
                        </div>)
                    })}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home