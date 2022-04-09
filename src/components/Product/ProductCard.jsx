import React from 'react'
import PriceTag from './PriceTag'
import decoration from '../../assets/svg/cardDecoration.svg'
import { Link } from 'react-router-dom'

const ProductCard = ({ productData, offer, cardSize}) => {
  return (
    <div className={`${cardSize == "md" ? 'w-[260px]':'w-[300px]'} py-4 border-[1px] bg-white border-gray-300 flex flex-col items-center relative`}>
      <img src={decoration} alt="decoration" className='w-[20%] h-[20%] absolute left-2 top-2 z-10' />
      <img src={productData.image} alt={productData.title} className="w-full h-[200px] px-4 object-contain z-20" />
      <div className='w-full flex flex-col gap-2 mt-2 px-4'>
        
        <Link to={`/products/${productData.id}`}>
          <p className='h-14 font-josefina font-semibold text-lg line-clamp-2 text-palette-dark transition-color duration-700 ease-in-out hover:text-palette-lightblue'>
            {productData.title}
          </p>
        </Link>
        <span className='h-1 w-20 bg-palette-lightblue'></span>

        <div className='flex gap-3 items-center'>
          <p className='px-4 pt-1 w-auto bg-palette-teal text-white font-neue text-sm flex items-center '>rate</p>
          <p className='font-neue pt-1 text-lg text-palette-teal'>{productData.rating.rate}</p>
        </div>

        <div className='flex gap-2'>
          <p className='font-neue text-xl pt-1 text-gray-400'>USD</p>
          <PriceTag price={productData.price} offValue={offer} />
        </div>
      </div>
      {
        offer && (
          <div className='w-20 h-20 z-30 bg-red-600 border-2 border-white rounded-full absolute top-3 right-3 flex flex-col justify-center items-center font-neue text-white'>
              <p className='text-2xl'>{offer}%</p>
              <p className='text-base'>off</p>
          </div>
        )
      }
    </div>
  )
}

export default ProductCard