import React, { useEffect } from 'react'
import { motion } from "framer-motion"
import { useState } from 'react'
import { URL } from '../config'
import {FcGoogle} from 'react-icons/fc'
import {useSelector,useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../features/user/userSlice'

const Login = () => {
  const [usernameS,setUsernameS] = useState("")
  const [nameS,setNameS] =useState("")
  const [emailS,setEmailS] = useState("")
  const [passwordS,setPasswordS] =useState("")

  const [showLogin, setShowLogin] = useState(true)

  const user = useSelector((state)=>state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(()=>{
    if(user.logged){
      navigate("/")
    }
  },[user])
 
  const iniciarSesion = (e) => {
    e.preventDefault()
    const {emailL:{value:email},passwordL:{value:password}} = e.target
    dispatch(login({email,password}))
    .then(res => console.log(res))
}
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
             <form onSubmit={iniciarSesion}>
                <div className='flex flex-col'>
                  <label htmlFor="emailL">Email</label>
                  <input type="text" name='emailL'
                    className='bg-gray-100 outline-none border border-gray-100 focus:border-palette-lightblue '/>
                </div>
                <div className='flex flex-col'>
                  <label htmlFor="passwordL">Password</label>
                  <input type="password" name='passwordL' 
                    className='bg-gray-100 outline-none border border-gray-100 focus:border-palette-lightblue '/>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  className='bg-palette-teal rounded-md text-white hover:opacity-80 py-3 w-full mt-4'
                  >
                    LogIn
                </motion.button>
                  
                <a className='flex items-center gap-5 justify-center border p-2 mt-5' href={`${URL}/connect/google`}>
                    <FcGoogle/><span className='text-palette-teal'>Inicia sesión</span>
                </a>
                {user.message&&<p className='text-palette-dark mt-3'>{user.message}</p>}
             </form>
            
   
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
              <input type="text" onChange={(e)=>{setEmailS(e.target.value)}} 
                className='bg-gray-100 outline-none border border-gray-100 focus:border-palette-lightblue '/>
            </div>
            <div className='flex flex-col'>
              <label htmlFor="">Password</label>
              <input type="password" onChange={(e)=>{setPasswordS(e.target.value)}} 
                className='bg-gray-100 outline-none border border-gray-100 focus:border-palette-lightblue '/>
            </div>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              className='bg-palette-teal rounded-md text-white hover:opacity-80 py-3'>
                Register
            </motion.button>
          </motion.div>
        }
   
      </div>

   
    </main>
  )
}

export default Login