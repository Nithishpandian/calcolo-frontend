import React, { useState } from 'react'
import logo from "../../assets/images/calcoloLogo.png"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../../features/auth/authSlice'

const Navbar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const logOut = ()=>{
        dispatch(logout())
        navigate("/auth/login")
    }
  return (
    <div className=' z-50 py-3 md:py-4 px-20 md:px-6 lg:px-20 flex justify-between md:justify-around items-center relative border-b border-gray-400'>
        <div className='flex items-center gap-x-5'>
            <div onClick={()=>setOpen(!open)} className={` -mt-0.5 -ml-14 z-20 cursor-pointer md:hidden text-3xl flex justify-center align-middle ${open?' text-gray-400 duration-500':' duration-500'}`}>
                <ion-icon name={open?"close":"menu"}></ion-icon>
            </div>
            <img src={logo} className=' w-32' alt="" />  
        </div>
        <ul className={` -z-10 gap-y-5 md:gap-y-0 py-8 md:py-0 left-0 right-0 text-center md:text-[15px] md:font-thin flex flex-col md:flex-row md:gap-x-10 text-stone-900 bg-[#dbdbdb] md:bg-white absolute md:static md:z-auto transition-all duration-500 ease-in ${open ? ' top-[58px] opacity-100 ':' -top-80'} opacity-0 md:opacity-100`}>
            <li><a className='hover:text-[#838383] duration-300' href="/">Home</a></li>
            <li><a className='hover:text-[#838383] duration-300' href="/featuredblog">Featured Post</a></li>
            <li><a className='hover:text-[#838383] duration-300' href="/recentblog">Recent Post</a></li>
            <li><a className='hover:text-[#838383] duration-300' href="/createblog">New Post</a></li>
            <li><a className='hover:text-[#838383] duration-300' href="/#contact">Contact</a></li>
        </ul>
        <div className='-mr-12 md:-mr-0'>
            <button onClick={logOut} className=' text-white bg-[#303030] border border-[#303030] hover:bg-[#fafafa] hover:text-[#303030] rounded-md py-1 px-3 font-medium duration-500'>Log out</button>
        </div>
    </div>
  )
}

export default Navbar