import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import rectangle from '../svg/Rectangle11.svg'
import Price from './Price'
import Quantity from './Quantity'


const ProductData = ({data}) => {
  const [qty, setQty] = useState(1)

  const addProduct = (product,qty) => {
    fetch('https://fakestoreapi.com/carts',{
            method:"POST",
            body:JSON.stringify(
                {
                    userId:5,
                    date:"2020-04-09",
                    products:[{productId:product.id,quantity:qty}]
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
     
  }
  return (
    <section>
        <div className='flex gap-3'>
            <img src={rectangle} alt="" className=' w-[50px] md:w-[100px]'/>
            <p className='text-base text-palette-lightblue'>{data.category}</p>
        </div>
        <h2 className='text-xl md:text-5xl text-palette-dark my-8 font-josefina'>{data.title}</h2>
        <p className='text-palette-dark'>{data.description}</p>
        <Price price={data.price} size="MD"/>
        <Quantity qtyUpdate={setQty}/>
        <div className='flex flex-col md:flex-row gap-6 mt-11'>
            <button className='bg-palette-dark hover:opacity-80  w-full md:w-1/2 h-16 rounded-[30px] text-white text-xl'>Buy now</button>
            <button className='bg-palette-lightblue hover:opacity-80 w-full md:w-1/3 h-16 rounded-[30px] text-white text-xl' onClick={() => addProduct(data,qty)}>add to cart</button>
        </div>
    </section>

  )
}

export default ProductData