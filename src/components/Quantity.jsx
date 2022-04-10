import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'

const Quantity = ({qtyUpdate}) => {
  const [qty, setQty] = useState(1)
  const decrement = () =>{
    if(qty>0){
      setQty(qty-1)
      qtyUpdate(qty)
    }
  }
  const increment = () =>{
    setQty(qty+1)
    qtyUpdate(qty)
  }
  return (
    <div className='flex flex-col'>
       <p className='text-palette-dark text-lg'>quantity</p>
       <div className='flex gap-3 h-10'>
           <button className='h-full w-10 border-2 font-bold' onClick={()=>decrement()}>-</button>
           <div className='h-full w-10 border-2 border-palette-lightblue text-center font-bold'>{qty}</div>
           <button className='h-full w-10 border-2 font-bold'onClick={()=>increment()}>+</button>
       </div>
    </div>
  )
}

export default Quantity