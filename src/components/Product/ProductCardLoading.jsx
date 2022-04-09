import React from 'react'

const ProductCardLoading = ({ cardSize }) => {
    return (
        <div className={`${cardSize == "md" ? 'w-[260px]' : 'w-[300px]'}  py-4 border-[1px] bg-white border-gray-300 flex flex-col items-center relative`}>
            <div className='w-full flex flex-col gap-4 mt-2 px-4 animate-pulse'>
                <div className='h-[200px] w-full bg-slate-600'></div>
                <span className=' w-full h-3 rounded-full bg-gray-500 text-white font-neue text-sm flex items-center '></span>
                <span className='h-1 w-20 bg-gray-500'></span>
                <span className=' w-1/4 h-3 rounded-full bg-gray-500 text-white font-neue text-sm flex items-center '></span>
                <span className=' w-[40%] h-3 rounded-full bg-gray-500 text-white font-neue text-sm flex items-center '></span>
            </div>
        </div>
    )
}

export default ProductCardLoading 