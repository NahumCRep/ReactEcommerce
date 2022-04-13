import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import { FcElectronics } from 'react-icons/fc'
import {FiMenu,FiXCircle} from 'react-icons/fi'
import Cart from './Cart'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const user = useSelector(state => state.user)
    //console.log('usuario', user)
    const [open, setOpen] = useState(false);
    return (
        <nav className='w-full h-16 px-12 fixed z-50 bg-white border-b-2 border-palette-lightgray flex items-center justify-between'>
            <Link to='/'>
                <div className='flex gap-1 items-center font-neue text-2xl font-bold text-palette-teal'>
                    <p className='pt-1'>DN</p>
                    <FcElectronics size={35} className='rotate-12' />
                    <p className='pt-1'>ELECTRONICS</p>
                </div>
            </Link>
            <div className='flex gap-8 relative'>
                <ul className={`${open?'inline-block':'hidden '}h-full text-white md:text-palette-teal bg-palette-teal md:bg-transparent text-lg font-bold md:flex absolute right-0 top-11 md:static gap-8 items-center font-josefina space-y-2 md:space-y-0 p-4 md:p-0 text-right`}>
                    <li>
                        <div className='flex items-center gap-2'>
                            <input type='text' className='bg-palette-lightgray w-80 rounded-lg h-8 px-3 outline-none border-none font-josefina text-sm text-center' />
                            <button className='outline-none border-none bg-none'><FaSearch /></button>
                        </div>
                    </li>
                    <li className='pt-1'><Link to={'/'}>Home</Link></li>
                    <li className='pt-1'><Link to={'/products'}>Products</Link></li>
                    {
                        !user.logged &&  <li className='pt-1'><Link to={'/login'}>Log In</Link></li>
                    }
                    {/* <li className=''><Link to={'/'}><button className='px-3 rounded-lg tracking-wider h-10 bg-palette-lightblue text-white'>Login</button></Link></li> */}
                </ul>
                {
                    user.logged && (
                        <ul className='flex items-center gap-8'>
                            <li><Cart /></li>
                            <li>
                                <div className='w-9 h-9 rounded-full bg-palette-teal'></div>
                            </li>
                        </ul>
                    )
                }
                <button onClick={()=>{setOpen(!open)}} className='block md:hidden mr-2 md:mr-0'>{open?<FiXCircle className='h-5 w-5'/>:<FiMenu className='h-5 w-5'/>}</button>
            </div>

        </nav>
    )
}

export default Navbar