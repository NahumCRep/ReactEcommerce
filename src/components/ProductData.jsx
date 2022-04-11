import React, {useState} from 'react'
import rectangle from '../svg/Rectangle11.svg'
import Price from './Price'
import Quantity from './Quantity'
import { useDispatch } from 'react-redux';
import { addCart } from '../features/cart/cartSlice';


const ProductData = ({data}) => {
  console.log('product data',data)
  const [productQuantity, setProductQuantity] = useState(1)
  const dispatch = useDispatch()
  
  const saveProductToCart = () => {
    dispatch(addCart({prodId:data.id, prodQuantity:productQuantity, prodPrice:data.price}))
  }

  const incrementProductQuantity = () => {
    setProductQuantity(productQuantity + 1) 
  }

  const decrementProductQuantity = () => {
    productQuantity > 1 && setProductQuantity(productQuantity - 1)
  }

  return (
    <section>
        <div className='flex gap-3'>
            <img src={rectangle} alt="" className=' w-[50px] md:w-[100px]'/>
            <p className='text-base text-palette-lightblue'>{data.category}</p>
        </div>
        <h2 className='text-xl md:text-5xl text-palette-dark my-8 uppercase'>{data.title}</h2>
        <p className='text-palette-dark'>{data.description}</p>
        <Price price={data.price} size="MD"/>
        <Quantity quantityState={productQuantity} incrementQuantity={incrementProductQuantity} decrementQuantity={decrementProductQuantity} />
        <div className='flex flex-col md:flex-row gap-6 mt-11'>
            <button className='bg-palette-dark hover:opacity-80  w-full md:w-1/2 h-16 rounded-[30px] text-white text-xl'>Buy now</button>
            <button onClick={()=>saveProductToCart()} className='bg-palette-lightblue hover:opacity-80 w-full md:w-1/3 h-16 rounded-[30px] text-white text-xl'>add cart</button>
        </div>
    </section>

  )
}

export default ProductData