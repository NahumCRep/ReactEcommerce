import React, { useEffect, useState } from 'react'
import Slider from '../components/Home/Slider'
import TitlteDivider from '../components/Home/TitlteDivider'
import BrandItem from '../components/Home/BrandItem'
import ProductsSection from '../components/Product/ProductsSection'
import ProductCard from '../components/Product/ProductCard'
import { Link } from 'react-router-dom'

const Home = () => {
  const [popularProducts, setPopularProducts] = useState([])
  const [offerProducts, setOfferProducts] = useState([])

  const getPopulars = () => {
    fetch('https://fakestoreapi.com/products?limit=8')
      .then(res => res.json())
      .then(json => {
        setPopularProducts(json)
      })
  }

  const getOffers = () => {
    fetch('https://fakestoreapi.com/products?limit=4')
      .then(res => res.json())
      .then(json => {
        setOfferProducts(json)
      })
  }

  useEffect(() => {
    getPopulars()
    getOffers()
  }, [])

  return (
    <main>
      <header className='w-full h-[600px] pt-16'>
        <Slider />
      </header>
      <div className='h-32 mt-20 flex items-center justify-center gap-4 flex-wrap'>
        <BrandItem brand={"DN Electronics"} />
        <BrandItem brand={"DN Electronics"} />
        <BrandItem brand={"DN Electronics"} />
        <BrandItem brand={"DN Electronics"} />
        <BrandItem brand={"DN Electronics"} />
        <BrandItem brand={"DN Electronics"} />
        <BrandItem brand={"DN Electronics"} />
      </div>
      <section className='mt-14 px-5 md:px-12'>
        <TitlteDivider title={'Populars'} />
        <ProductsSection>
          {popularProducts.map((product) => {
            return (
              <ProductCard key={product.id} productData={product} />
            )
          })}
        </ProductsSection>
        <Link to={"/products"}><button className='w-40 h-11 mt-8 float-right   bg-palette-teal text-white font-josefina'>more</button></Link>
      </section>
      <section className='mt-44 px-5 md:px-12 relative bg-palette-teal py-14 flex flex-col items-center'>
        <div className='w-56 h-24 absolute left-5 md:left-12 -top-12 bg-palette-dark flex items-center justify-center '>
            <h1 className='font-neue text-white text-5xl'>Offers</h1>
        </div>
        <ProductsSection>
          {offerProducts.map((product) => {
            return (
              <ProductCard key={product.id} productData={product} offer={20} />
            )
          })}
        </ProductsSection>
      </section>
    </main>
  )
}

export default Home