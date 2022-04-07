import React from 'react'
import { motion } from "framer-motion"
import { useState } from 'react'

const Login = () => {
  const [emailL,setEmailL] = useState("")
  const [passwordL,setPasswordL] =useState("")

  const [usernameS,setUsernameS] = useState("")
  const [nameS,setNameS] =useState("")
  const [emailS,setEmailS] = useState("")
  const [passwordS,setPasswordS] =useState("")

  const [showLogin, setShowLogin] = useState(true)
  return (
    <main className=' w-full h-screen pt-16 flex justify-center items-center'>
      <div className='border-2 border-white w-full sm:w-4/5 md:1/2 h-[480px] flex justify-center items-center relative'>
        <div className="bg-palette-lightblue h-[400px] w-full rounded-md shadow-md overflow-hidden">    
        </div>
        {showLogin?
             <motion.div className='bg-white h-full w-full sm:w-96 border-2 border-palette-teal absolute rounded-lg shadow-md py-5 px-8 flex flex-col gap-5'
             initial={{opacity: 0, x: "-100vw"}}
             transition={{duration: 1}}
             animate={{
               opacity: 1, x:0
             }}
           >
             <h2 className='text-palette-dark font-medium text-lg border-b-2 pb-4 text-center border-palette-dark'>LogIn</h2>
             <button className='text-center hover:text-palette-lightblue' onClick={()=>setShowLogin(false)}>Or Register</button>
             <div className='flex flex-col'>
               <label htmlFor="">Email</label>
               <input type="text" onChange={(e)=>{setEmailL(e.target.value)}} 
                 className='bg-gray-100 outline-none border border-gray-100 focus:border-palette-lightblue '/>
             </div>
             <div className='flex flex-col'>
               <label htmlFor="">Password</label>
               <input type="password" onChange={(e)=>{setPasswordL(e.target.value)}} 
                 className='bg-gray-100 outline-none border border-gray-100 focus:border-palette-lightblue '/>
             </div>
             <button className='bg-palette-teal rounded-md text-white hover:opacity-80 py-3'>LogIn</button>
             <button>Google</button>
             <button>Facebook</button>
           </motion.div>
        :
            <motion.div className='bg-white h-full w-full sm:w-96 border-2 border-palette-teal absolute rounded-lg shadow-md py-5 px-8 flex flex-col gap-3'
            initial={{opacity: 0, x: "100vw"}}
            transition={{duration: 3}}
            animate={{
              opacity: 1, x:0
            }}
          >
            <h2 className='text-palette-dark font-medium text-lg border-b-2 pb-4 text-center border-palette-dark'>Register</h2>
            <button className='text-center hover:text-palette-lightblue' onClick={()=>setShowLogin(true)}>Or Log In</button>
            <div className='flex flex-col'>
              <label htmlFor="">Username</label>
              <input type="text" onChange={(e)=>{setUsernameS(e.target.value)}} 
                className='bg-gray-100 outline-none border border-gray-100 focus:border-palette-lightblue '/>
            </div>
            <div className='flex flex-col'>
              <label htmlFor="">Name</label>
              <input type="text" onChange={(e)=>{setNameS(e.target.value)}} 
                className='bg-gray-100 outline-none border border-gray-100 focus:border-palette-lightblue '/>
            </div>
            <div className='flex flex-col'>
              <label htmlFor="">Email</label>
              <input type="text" onChange={(e)=>{setEmailL(e.target.value)}} 
                className='bg-gray-100 outline-none border border-gray-100 focus:border-palette-lightblue '/>
            </div>
            <div className='flex flex-col'>
              <label htmlFor="">Password</label>
              <input type="password" onChange={(e)=>{setPasswordL(e.target.value)}} 
                className='bg-gray-100 outline-none border border-gray-100 focus:border-palette-lightblue '/>
            </div>
            <button className='bg-palette-teal rounded-md text-white hover:opacity-80 py-3'>Register</button>
          </motion.div>
        }
   
      </div>

   
    </main>
  )
}

export default Login