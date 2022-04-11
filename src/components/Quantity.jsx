import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'

const Quantity = ({quantityState, incrementQuantity, decrementQuantity}) => {
  return (
    <div className='flex flex-col'>
       <p className='text-palette-dark text-lg'>quantity</p>
       <div className='flex gap-3 h-10'>
           <button onClick={()=>decrementQuantity()} className='h-full w-10 border-2 font-bold'>-</button>
           <div className='h-full w-10 border-2 border-palette-lightblue text-center font-bold'>{quantityState}</div>
           <button onClick={()=>incrementQuantity()} className='h-full w-10 border-2 font-bold'>+</button>
       </div>
    </div>
  )
}

export default Quantity