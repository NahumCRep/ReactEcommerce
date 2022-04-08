import React from 'react'
import ProductCard from './ProductCard'

const similars = [
    {
      "id": 1,
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 109.95,
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      
    },
    {
      "id": 2,
      "title": "Mens Casual Premium Slim Fit T-Shirts ",
      "price": 22.3,
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    },
    {
      "id": 3,
      "title": "Mens Cotton Jacket",
      "price": 55.99,
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",

    },
    {
      "id": 4,
      "title": "Mens Casual Slim Fit",
      "price": 15.99,
      "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",

    }
]
const SimilarProducts = () => {
  return (
    <div >
        <h3 className='text-palette-dark text-xl'>Similar Products</h3>
        <div className='flex flex-wrap gap-3 mt-3'>
            {similars.map((item) =>(
                <ProductCard key={item.id} product={item}/>
            ))}
        </div>


    </div>
  )
}

export default SimilarProducts