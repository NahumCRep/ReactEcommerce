import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Cart = () => {
  const cart = useSelector(state => state.cart)

  return (
    <div className='relative flex items-center justify-center text-palette-teal'>
      <Link to='/cart'><FaShoppingCart size={30} /></Link>
      {
        cart.length > 0 && (
          <div className='w-5 h-4 absolute rounded-full flex items-center justify-center bg-red-600 text-white -top-1 -right-2 text-[9px]'>
            {
              cart.length > 9 ? '+9' : cart.length
            }
          </div>
        )
      }
    </div>
  )
}

export default Cart