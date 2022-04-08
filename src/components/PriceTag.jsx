import React from 'react'

const PriceTag = ({price,size}) => {
      // MD detailsProduct
      const TAG_SIZE = {
        SM: 'text-xl',
        MD: 'h-12 text-5xl'
      }
    const tagSize = TAG_SIZE[size] || '';
  return (
    <div className={tagSize}>$ {price}</div>
  )
}

export default PriceTag