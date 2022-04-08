import React from 'react'
import ProductDetails from './ProductDetails'
import ProductInfo from './ProductInfo'


const ShowProduct = ({product}) => {
  return (
      <div>
        <ProductInfo product={product}/>
        <ProductDetails/>
      </div>

  )
}

export default ShowProduct