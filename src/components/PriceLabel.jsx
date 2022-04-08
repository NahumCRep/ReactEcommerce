import React from 'react'

const PriceLabel = ({size}) => {
    // MD detailsProduct
    const LABEL_SIZE = {
      SM: 'w-20',
      MD: 'w-24 h-12'
    }
  const labelSize = LABEL_SIZE[size] || '';
  return (
    <div className={'bg-palette-lightblue text-palette-dark uppercase flex items-center justify-center font-bold '+labelSize}>price</div>
  )
}

export default PriceLabel