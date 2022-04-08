import React from 'react'
import { Link } from 'react-router-dom'
import Price from './Price'

const ProductCard = ({product}) => {
  return (
    <Link to='' className='w-80 flex flex-col pointer'>
        <div className='h-64 flex justify-center bg-palette-lightgray hover:shadow-lg'>
            <img src={product.image} alt={product.name} className='h-full opacity-100'/>
        </div>
        <p className='text-palette-dark uppercase font-bold my-3 h-8'>{product.title}</p>
        <Price price={product.price} size="SM"/>

    </Link>
  )
}

export default ProductCard