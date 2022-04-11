import React from 'react'
import ProductData from './ProductData'
import { motion } from 'framer-motion'

const ProductInfo = ({product}) => {

  return (
    <div className='flex flex-col md:grid md:grid-cols-2 gap-8 p-8 mt-11 md:h-screen'>
        
        <motion.div 
          initial={{
            opacity:0,
            x:-200
          }}
          animate={{
            opacity:1,
            x:0
          }}
          transition={{
            duration:1
          }}
          className='h-min md:h-full overflow-hidden p-7'
        >
            <img src={product.image} alt={product.title} className=' h-[300px] md:h-full '/>
        </motion.div>
  
        <ProductData data={product}/>  

    </div>
  )
}

export default ProductInfo