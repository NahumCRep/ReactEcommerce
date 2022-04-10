import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const Cart = () => {

  return (
    <div className='relative flex items-center justify-center text-palette-teal'>
        <Link to='/cart'><FaShoppingCart size={30} /></Link>
        <div className='w-5 h-4 absolute rounded-full flex items-center justify-center bg-red-600 text-white -top-1 -right-2 text-[9px]'>
            +9 
        </div>
    </div>
  )
}

export default Cart