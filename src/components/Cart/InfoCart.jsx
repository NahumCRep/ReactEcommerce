import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import rectangle from '../../svg/Rectangle11.svg'
import Price from '../Price'
import {MdDelete} from 'react-icons/md'

const InfoCart = ({cart}) => {
    const [products, setProducts] = useState([])
    const [carrito, setCarrito] = useState(cart)

    const [productsCart, setProductsCart] = useState([])
    const getProducts = () => {
        fetch('https://fakestoreapi.com/products?limit=8')
          .then(res => res.json())
          .then(json => {
            console.log(json)
            setProducts(json)

          })
      }

    const getProductsCart = () => {
       console.log(cart)
        cart.map((prod) => (
            getProduct(prod.productId)
        ))
      
    }
    const getProduct = (id) => {
        fetch('https://fakestoreapi.com/products/'+id)
            .then(res=>res.json())
            .then(json=>{
                console.log(json)
                setProductsCart([...products,json])
            })
    }

    useEffect(() => {
        getProductsCart()
        getProducts()
        console.log(carrito)
    }, [])

  return (
    <div className='flex-1'> {/*info*/}
       <div className='flex flex-col gap-4 border-2 border-palette-teal'>{/*product*/}
            {products.map((prod,i)=>(
                <div className='grid grid-cols-3 gap-4 shadow-md px-5 py-7' key={prod.id}> {/*producDetail*/}
                    <img src={prod.image} alt={prod.title} className='h-[250px]' />
                    <div>
                        <div className='flex gap-3'>
                            <img src={rectangle} alt="" className=' w-[50px] md:w-[80px]'/>
                            <p className='text-base text-palette-lightblue'>{prod.category}</p>
                        </div>
                        <p className='text-palette-dark my-4 font-josefina'>{prod.title}</p>
                        <p className='text-palette-dark'>{prod.description}</p>
                        <Price price={prod.price} size="SM"/>

                    </div>
                    <div className='flex flex-col justify-around'>
                        <div className='flex gap-3 h-10'>
                            <button className='h-full w-10 border-2 font-bold' >-</button>
                            <div className='h-full w-10 border-2 border-palette-lightblue text-center font-bold'>{carrito.productQuantity}</div>
                            <button className='h-full w-10 border-2 font-bold'>+</button>
                        </div>
                        <button className=' text-palette-lightblue ml-auto'><MdDelete className='w-10 h-10'/></button>
                    </div>
                </div>
            ))}
        </div>

      
    </div>
  )
}

export default InfoCart