import React from 'react'

const PriceTag = ({ price, offValue }) => {
    return (
        <div className='flex items-center gap-3'>
            {
                !offValue
                    ? <p className='font-neue text-2xl text-palette-teal'><sup>$</sup>{price}</p>
                    : (
                        <>
                            <del><p className='font-neue text-2xl text-palette-teal'><sup>$</sup>{price}</p></del>
                            <p className='font-neue text-3xl text-palette-teal'><sup>$</sup>{(price - (price * (offValue/100))).toFixed(2)}</p>
                        </>
                    )
            }
        </div>
    )
}

export default PriceTag