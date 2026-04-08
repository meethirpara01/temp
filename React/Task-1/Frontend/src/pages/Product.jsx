import React, { useEffect, useState } from 'react'
import { getProducts } from '../user.api.js'
import ProductUi from '../components/ProductUi.jsx'

const Product = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        async function fetchProducts() {
            const data = await getProducts()
            setProducts(data);
        }
        fetchProducts()
    }, [])

  return (
    <div className='productContainer'>
        {products.map((product, idx) => {
            return <ProductUi key={idx} product={product}/>
        })}
    </div>
  )
}

export default Product