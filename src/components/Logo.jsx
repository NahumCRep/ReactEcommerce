import React from 'react'
import {motion} from 'framer-motion'

const pathVariants = {
  hidden:{
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      duration: 3,
      ease: 'easeInOut',
      repeat:Infinity,
      
    }
  }

}
const Logo = ({size='48px'}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" version="1" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 48 48">
        <motion.path 
          variants={pathVariants}
          initial="hidden"
          animate ="show"
          fill="#FF9800" d="M44,18v-4H34V4h-4v10h-4V4h-4v10h-4V4h-4v10H4v4h10v4H4v4h10v4H4v4h10v10h4V34h4v10h4V34h4v10h4V34h10v-4H34 v-4h10v-4H34v-4H44z"/>
        <path fill="#126E82" d="M8,12v24c0,2.2,1.8,4,4,4h24c2.2,0,4-1.8,4-4V12c0-2.2-1.8-4-4-4H12C9.8,8,8,9.8,8,12z"/>
        <path fill="#37474F" d="M31,31H17c-1.1,0-2-0.9-2-2V19c0-1.1,0.9-2,2-2h14c1.1,0,2,0.9,2,2v10C33,30.1,32.1,31,31,31z"/>
    </svg>
  )
}

export default Logo