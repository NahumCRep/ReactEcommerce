import React from 'react'
import { FcElectronics } from 'react-icons/fc'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className=' bg-palette-dark text-white mt-1'>
      <div className='md:flex md:justify-evenly md:items-center px-12 md:px-4 bg-palette-teal py-7'>
        <Link to='/'>
            <div className='flex gap-1 items-center font-neue text-2xl font-bold my-2'>
              <p className='pt-1'>DN</p>
              <FcElectronics size={35} className='rotate-12' />
              <p className='pt-1'>ELECTRONICS</p>
            </div>
        </Link>
        <div className='flex flex-col  gap-3 w-full md:w-1/3'>
          <h2 className='text-2xl font-josefina font-bold'>Links</h2>
          <hr />
          <Link to={'/'}>Home</Link>
          <Link to={'/products'}>Products</Link>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer