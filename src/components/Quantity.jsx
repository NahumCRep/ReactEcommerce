import React from 'react'

const Quantity = () => {
  return (
    <div className='flex flex-col'>
       <p className='text-palette-dark text-lg'>quantity</p>
       <div className='flex gap-3 h-10'>
           <button className='h-full w-10 border-2 font-bold'>-</button>
           <div className='h-full w-10 border-2 border-palette-lightblue text-center font-bold'>1</div>
           <button className='h-full w-10 border-2 font-bold'>+</button>
       </div>
    </div>
  )
}

export default Quantity