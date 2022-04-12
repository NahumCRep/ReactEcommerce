import React from 'react'

const ShowProductLoading = () => {
  return (
    <div className='flex flex-col md:grid md:grid-cols-2 gap-8 p-8 mt-11 md:h-screen animate-pulse'>
        <div className='h-min md:h-full overflow-hidden p-7'>
            <div className='h-[300px] md:h-full  bg-slate-500'></div>
        </div>
        <section className='mt-6'>
            <div className='flex flex-col gap-3 w-full'>
                <div className='flex gap-3'>
                    <span className=' w-[50px] md:w-[100px] h-1 bg-gray-500 rounded-full'></span>
                    <span className='h-6 w-32 bg-slate-500 rounded-full'></span>
                </div>

                <span className='bg-gray-500 w-full h-7 md:h-12 rounded-full my-8'></span>
                <span className='w-full h-20 bg-gray-500 rounded-xl'></span>
                <span className='w-1/3 h-16 bg-gray-500 rounded-xl'></span>
                <span className='w-1/4 h-16 bg-gray-500 rounded-xl'></span>
            </div>
            <div className='flex flex-col md:flex-row gap-6 mt-11'>
                <span className='bg-gray-500 w-full md:w-1/2 h-16 rounded-[30px]'></span>
                <span className='bg-gray-500 w-full md:w-1/3 h-16 rounded-[30px]'></span>
            </div>
        </section>

    </div>
  )
}

export default ShowProductLoading