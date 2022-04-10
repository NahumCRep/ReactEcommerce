import React from 'react'
import ProductData from './ProductData'

const ProductInfo = ({product}) => {

  return (
    <div className='flex flex-col md:grid md:grid-cols-2 gap-8 p-8 mt-11 md:h-screen'>
        
        <div className='h-min md:h-full overflow-hidden p-7'>
            <img src={product.image} alt={product.title} className=' h-[300px] md:h-full '/>
        </div>
  
        <ProductData data={product}/>  

    </div>
  )
}

export default ProductInfo