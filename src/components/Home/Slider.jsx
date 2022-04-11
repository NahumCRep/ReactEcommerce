import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const sliderMockup = [
    {
        img: "https://images.unsplash.com/photo-1615869442320-fd02a129c77c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1034&q=80",
        title: "Electronics",
        url: "/products?category=electronics"
    },
    {
        img: "https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1372&q=80",
        title: "Men's Clothing",
        url: "/products?category=men's clothing"
    },
    {
        img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        title: "Women's Clothing",
        url: "/products?category=women's clothing"
    },
    {
        img: "https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        title: "jewelery",
        url: "/products?category=jewelery"
    }

]

const Slider = () => {
    const [sliderIndex, setSliderIndex] = useState(0)
    return (
        <div className='w-full h-[100%] relative flex items-center'>
            <div className='bg-palette-teal h-[50%] w-full'></div>
            <div className='w-[90%] h-[90%] bg-black absolute left-1/2 -translate-x-1/2 '>
                <div className='w-full h-full relative'>
                    <img src={sliderMockup[sliderIndex].img}
                        alt='slider img'
                        className='w-full h-full object-cover opacity-50'
                    />
                    <motion.div className='absolute left-8 top-1/2 -translate-y-1/2'>
                        <motion.h1
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            className='text-white font-neue text-7xl'
                        >
                            {sliderMockup[sliderIndex].title}
                        </motion.h1>
                        <Link to={sliderMockup[sliderIndex].url}>
                            <motion.button
                                initial={{ opacity: 0, y: -100 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7 }}
                                className='w-48 h-12 bg-palette-teal text-white rounded-full font-josefina font-semibold text-lg transition-all duration-700 ease-in-out hover:tracking-widest'
                            >
                                more
                            </motion.button>
                        </Link>
                    </motion.div>
                    <div className='absolute w-[80%] h-10 md:w-[50%] md:h-14  bg-palette-teal -bottom-10 md:-bottom-14 left-1/2 -translate-x-1/2 rounded-b-full flex items-center justify-center gap-3 '>
                        <button className='sliderButton' onClick={() => setSliderIndex(0)}></button>
                        <button className='sliderButton' onClick={() => setSliderIndex(1)}></button>
                        <button className='sliderButton' onClick={() => setSliderIndex(2)}></button>
                        <button className='sliderButton' onClick={() => setSliderIndex(3)}></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider