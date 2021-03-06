import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'
import Logo from '../components/Logo';
import ShowProduct from '../components/ShowProduct';
import ShowProductLoading from '../components/ShowProductLoading';



const DetailsProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getProduct = async () => {
            setIsLoading(true);
            const res = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await res.json());
            setIsLoading(false)
        }
        getProduct();
    },[])

 
  return (
    <main className=' w-full  pt-10 md:pt-16 px-5 md:px-10 flex flex-col'>
        {isLoading ? <ShowProductLoading/> : <ShowProduct product={product}/>}
    </main>
   )
}

export default DetailsProduct
