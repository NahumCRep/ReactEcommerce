import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import InfoCart from '../components/Cart/InfoCart'
import SummaryCart from '../components/Cart/SummaryCart'
import TitlteDivider from '../components/Home/TitlteDivider'
import { useSelector, useDispatch } from 'react-redux'

const Cart = () => {
    const cart = useSelector(state => state.cart)

    return (
        <main className='pt-16'>
            <div className='px-5 py-10'>
                <TitlteDivider title={'Cart'} />
                <div className='flex items-center justify-between px-5 my-5'>
                    <Link to={'/products'} className='text-white bg-palette-teal rounded-lg px-8 py-2 font-josefina'>Continue Shopping</Link>
                    <span>Products ({cart.length})</span>
                    {console.log(cart)}
                    <Link to={'/'} className='text-white bg-palette-dark rounded-lg px-8 py-2 font-josefina uppercase'>Checkout Now</Link>
                </div>
                <div className='flex justify-between'>
                    <InfoCart />
                    <SummaryCart />
                </div>
            </div>
        </main>
    )
}

export default Cart