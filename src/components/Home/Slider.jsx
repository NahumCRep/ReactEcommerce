import React from 'react'
import { Link } from 'react-router-dom'

const Slider = () => {
  return (
    <div className='w-full h-[100%] relative flex items-center'>
        <div className='bg-palette-teal h-[50%] w-full'></div>
        <div className='w-[90%] h-[90%] bg-black absolute left-1/2 -translate-x-1/2 '>
            <div className='w-full h-full relative'>
                <img src='https://images.unsplash.com/photo-1615869442320-fd02a129c77c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1034&q=80' 
                    alt='slider img' 
                    className='w-full h-full object-cover opacity-50' 
                />
                <div className='absolute left-8 top-1/2 -translate-y-1/2'>
                    <h1 className='text-white font-neue text-7xl'>Product Title</h1>
                    <Link to="/"><button className='w-48 h-12 bg-palette-teal text-white rounded-full font-josefina font-semibold text-lg transition-all duration-700 ease-in-out hover:tracking-widest'>more</button></Link>
                </div>
                <div className='absolute w-[80%] h-10 md:w-[50%] md:h-14  bg-palette-teal -bottom-10 md:-bottom-14 left-1/2 -translate-x-1/2 rounded-b-full flex items-center justify-center gap-3 '>
                    <button className='sliderButton'></button>
                    <button className='sliderButton'></button>
                    <button className='sliderButton'></button>
                    <button className='sliderButton'></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Slider