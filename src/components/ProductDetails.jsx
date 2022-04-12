import React from 'react'
import line from '../svg/Line1.svg'

const ProductDetails = () => {
  return (
    <section className='my-10 flex flex-col gap-3'>
        <h3 className='text-palette-dark text-xl'>Details</h3>
        <img src={line} alt="" className=''/>
        <div className='w-full max-h-min bg-palette-lightgray py-10 px-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id autem accusamus incidunt nesciunt placeat nemo repellat aut ad laudantium nisi.</div>
    </section>
  )
}

export default ProductDetails