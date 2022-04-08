import React from 'react'
import ProductData from './ProductData'

const ProductInfo = ({product}) => {
  return (
    <div className='grid grid-cols-2 gap-8 p-8 mt-11 h-screen'>
        {console.log(product)}
        <div className='max-h-full overflow-hidden p-7'>
            <img src={product.image} alt={product.title} className='w-full'/>
        </div>
  
        <ProductData data={product}/>  

    </div>
  )
}

export default ProductInfo