import React from 'react'
import Slider from '../components/Home/Slider'
import TitlteDivider from '../components/Home/TitlteDivider'
import BrandItem from '../components/Home/BrandItem'
import ProductsSection from '../components/Product/ProductsSection'
import ProductCard from '../components/Product/ProductCard'

const Home = () => {
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
    
        </ProductsSection>
      </section>
    </main>
  )
}

export default Home