import React from 'react'
import PriceTag from './PriceTag'
import PriceLabel from './PriceLabel'

const Price = ({price, size}) => {
    // MD detailsProduct
   const PRICE_SIZE = {
       MD: 'my-7'
   }
   
   const sizePrice = PRICE_SIZE[size] || '';
  return (
    <div className={'flex '+sizePrice}>
        <PriceLabel size={size}/>
        <PriceTag price={price} size={size}/>
    </div>
  )
}

export default Price