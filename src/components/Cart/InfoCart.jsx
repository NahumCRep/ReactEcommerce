import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import rectangle from '../../svg/Rectangle11.svg'
import Price from '../Price'
import { MdDelete } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { removeCart, incrementQuantity, decrementQuantity } from '../../features/cart/cartSlice'


const InfoCart = () => {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const [carrito, setCarrito] = useState(cart)

    const removeItemFromCart = (prodID) => {
        dispatch(removeCart(prodID))
    }

    const incrementProductQuantity = (prodID) => {
        dispatch(incrementQuantity(prodID))
    }

    const decrementProductQuantity = (prodID) => {
        dispatch(decrementQuantity(prodID))
    }


    useEffect(() => {
        setCarrito(cart)
    }, [cart])

    return (
        <div className='flex-1'> {/*info*/}
            <div className='flex flex-col h-auto gap-4 border-2 border-palette-teal'>{/*product*/}
                {
                    carrito && (
                        carrito.map((prod, i) => (
                            <div className='grid grid-cols-3 gap-4 shadow-md px-5 py-7' key={prod.id}> {/*producDetail*/}
                                <img src={prod.image} alt={prod.title} className='h-[250px]' />
                                <div>
                                    <div className='flex gap-3'>
                                        <img src={rectangle} alt="" className=' w-[50px] md:w-[80px]' />
                                        <p className='text-base text-palette-lightblue'>{prod.category}</p>
                                    </div>
                                    <p className='text-palette-dark my-4 font-josefina'>{prod.title}</p>
                                    {/* <p className='text-palette-dark'>{prod.description}</p> */}
                                    <Price price={prod.price} size="SM" />

                                </div>
                                <div className='flex flex-col justify-around'>
                                    <div className='flex gap-3 h-10'>
                                        <button onClick={() => decrementProductQuantity(prod.id)} className='h-full w-10 border-2 font-bold' >-</button>
                                        <div className='h-full w-10 border-2 border-palette-lightblue text-center font-bold'>{prod.quantity}</div>
                                        <button onClick={() => incrementProductQuantity(prod.id)} className='h-full w-10 border-2 font-bold'>+</button>
                                    </div>
                                    <button onClick={() => removeItemFromCart(prod.id)} className=' text-palette-lightblue ml-auto'><MdDelete className='w-10 h-10' /></button>
                                </div>
                            </div>
                        ))
                    )
                }
            </div>
        </div>
    )
}

export default InfoCart