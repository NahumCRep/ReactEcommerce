import React from 'react'

const TitlteDivider = ({title}) => {
  return (
    <div className='flex gap-2 items-center'>
        <h1 className='w-auto font-neue text-palette-teal text-2xl md:text-5xl'>{title}</h1>
        <div className='relative flex-grow h-1 md:h-2 bg-palette-teal flex items-center'>
            <div className='absolute w-32 h-5 md:w-48 md:h-8 bg-palette-lightblue left-12'></div>
        </div>
    </div>
  )
}

export default TitlteDivider