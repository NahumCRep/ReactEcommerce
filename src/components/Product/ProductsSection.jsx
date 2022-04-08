import React from 'react'

const ProductsSection = ({children}) => {
  return (
    <section className='w-full h-auto min-h-screen grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {children}
    </section>
  )
}

export default ProductsSection