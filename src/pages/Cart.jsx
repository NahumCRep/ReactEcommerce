import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import InfoCart from '../components/Cart/InfoCart'
import SummaryCart from '../components/Cart/SummaryCart'
import TitlteDivider from '../components/Home/TitlteDivider'

const Cart = () => {
    const [cart, setCart] = useState([]); //[{productId, quantity},{productId, quantity}]
    const [loadingCart, setLoadingCart] = useState(true)


    const getUserCart = () => {
        fetch('https://fakestoreapi.com/carts/user/2')
          .then(res => res.json())
          .then(json => {
            //console.log(json[0].products)
            setCart(json[0].products)
            setLoadingCart(false)
           
          })
      }

    useEffect(() => {
        getUserCart()
    }, [])

  return (
    <main className='pt-16'>
        <div className='px-5 py-10'>
            <TitlteDivider title={'Cart'} />
            <div className='flex items-center justify-between px-5 my-5'>
                <Link to={'/products'} className='text-white bg-palette-teal rounded-lg px-8 py-2 font-josefina'>Continue Shopping</Link>
                <span>Products ({cart.length})</span>
                <Link to={'/'} className='text-white bg-palette-dark rounded-lg px-8 py-2 font-josefina uppercase'>Checkout Now</Link>
            </div>
            {!loadingCart&&
                <div className='flex justify-between'> {/*bottom */}
                    <InfoCart cart={cart}/>
                    <SummaryCart/>
                </div>
            }
        </div>
    </main>
  )
}

export default Cart