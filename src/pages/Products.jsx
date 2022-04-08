import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [isLoading, setIsLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setIsLoading(true);
            const res = await fetch("https://fakestoreapi.com/products");
            if(componentMounted){
                setData(await res.clone().json());
                setFilter(await res.json());
                setIsLoading(false);
                console.log(filter)
            }

            return () => {
                componentMounted = false;
            }
        }
        getProducts();

    },[]);

  return (
    <main className=' w-full h-screen pt-16 flex flex-col'>
        <h1 className='text-center text-2xl text-palette-dark text my-4'>Products</h1>
    </main>
  )
}

export default Products