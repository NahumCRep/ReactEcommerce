import React from 'react'
import ProductDetails from './ProductDetails'
import ProductInfo from './ProductInfo'
import SimilarProducts from './SimilarProducts'


const ShowProduct = ({product}) => {
  return (
      <div>
        <ProductInfo product={product}/>
        <ProductDetails/>
        <SimilarProducts/>
      </div>

  )
}

export default ShowProduct