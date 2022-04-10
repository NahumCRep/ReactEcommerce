import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
import { BiCategoryAlt } from 'react-icons/bi'
import ProductsSection from '../components/Product/ProductsSection'
import ProductCard from '../components/Product/ProductCard'
import ProductCardLoading from '../components/Product/ProductCardLoading'

const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [isLoading, setIsLoading] = useState(false);
    let componentMounted = true;

    const getProducts = async (searchValue) => {
        console.log(searchValue)
        let routeApi = ""
        searchValue ? routeApi = `products/category/${searchValue}` : routeApi = 'products'
        console.log(routeApi)
        setIsLoading(true);
        const res = await fetch(`https://fakestoreapi.com/${routeApi}`);
        if (componentMounted) {
            setData(await res.clone().json());
            setFilter(await res.json());
            setIsLoading(false);
            // console.log(filter)
        }

        return () => {
            componentMounted = false;
        }
    }

    const [allCategories, setAllCategories] = useState([])
    const [searchParams] = useSearchParams()
    const category = searchParams.get('category')


    const getAllCategories = () => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(json => {
                console.log('categories', json)
                setAllCategories(json)
            })
    }

    useEffect(() => {

        getAllCategories()
        getProducts(category)
    }, [category]);

    return (
        <main className=' w-full h-auto min-h-screen pt-16 flex flex-col'>
            <div className='w-full h-20 flex'>
                <div className='w-[20%] h-full bg-palette-teal'></div>
                <div className='flex-grow flex gap-2  items-center px-4 text-palette-teal'>
                    <BiCategoryAlt size={30} />
                    <p className='font-josefina text-lg pt-1'>{`/ Products / ${category ? category : 'All'}`}</p>
                </div>
            </div>
            <section className='w-full h-auto flex'>
                <aside className='w-[20%] h-auto  min-h-screen bg-slate-500'>
                    <ul className='w-full'>
                        {
                            allCategories
                                ? (
                                    allCategories.map((catg, index) => {
                                        return (
                                            <li key={index}><Link to={`/products?category=${catg}`}>{catg}</Link></li>
                                        )
                                    })
                                )
                                : null
                        }
                    </ul>
                </aside>
                <div className='flex-grow max-w-[80%] px-1'>
                    <ProductsSection>
                        {
                            data
                                ? (
                                    data.map((prod) => {
                                        return (
                                            <ProductCard productData={prod} cardSize="md" />
                                        )
                                    })
                                )
                                : <ProductCardLoading sizeCard="md" />
                        }
                    </ProductsSection>
                </div>
            </section>
        </main >
    )
}

export default Products