import React, { useEffect, useState } from 'react'
import registerImg from "../../assets/images/loginPageImg.png"
import logo from '../../assets/images/calcoloLogo.png'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { register, reset } from '../../features/auth/authSlice'
import { toast } from 'react-toastify'
import Spinner from '../../components/common/Spinner'


const RegisterPage = () => {
    const [formData, setFormData] = useState({
        userName: "",
        emailId: "",
        password: "",
        password2: ""
    })
    const { userName, emailId, password, password2 } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    )

    useEffect(()=>{
        if(isError){
            toast.error(message)
        }

        if(isSuccess || user){
            navigate("/auth/login")
        }

        dispatch(reset())
    }, [user, isError, isSuccess, message])
    

    const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
    }
    const onSubmit = (e) => {
        e.preventDefault()

        if(password !== password2){
            toast.error("Password do not match")
        } else {
            const userData = {
                userName,
                emailId,
                password,
            }

            dispatch(register(userData))
        }
    }

  return (
    <>
    <div className=' grid grid-cols-2'>
        <img className=' w-screen h-screen' src={registerImg} alt="" />
        <div className='flex flex-col justify-center items-center p-12 mb-10'>
            <img className=' w-1/4' src={logo} alt="" />
            <h2 className=' text-stone-800 text-2xl mb-8'>Get's started</h2>
            <form className=' flex flex-col gap-y-3' onSubmit={onSubmit}>
                <input 
                    className=' font-poppins py-1.5 px-3 rounded border border-[#a7a7a7] text-stone-800 placeholder-[#7e7e7e] focus:outline-none focus:border-stone-800'
                    type="text" 
                    name="userName"
                    value={userName}
                    onChange={onChange}
                    placeholder='Username'
                />
                <input 
                    className=' font-poppins py-1.5 px-3 rounded border border-[#a7a7a7] text-stone-800 placeholder-[#7e7e7e] focus:outline-none focus:border-stone-800'
                    type="text" 
                    name='emailId'
                    value={emailId}
                    onChange={onChange}
                    placeholder='EmailId' 
                />
                <input 
                    className=' font-poppins py-1.5 px-3 rounded border border-[#a7a7a7] text-stone-800 placeholder-[#7e7e7e] focus:outline-none focus:border-stone-800'
                    type="password"
                    name='password'
                    value={password}
                    onChange={onChange}
                    placeholder='Password' 
                />
                <input 
                    className=' font-poppins py-1.5 px-3 rounded border border-[#a7a7a7] text-stone-800 placeholder-[#7e7e7e] focus:outline-none focus:border-stone-800'
                    type="password" 
                    name='password2'
                    value={password2}
                    onChange={onChange}
                    placeholder='Confirm Password' 
                />
                <button type='submit' className=' duration-300 hover:bg-white hover:text-[#292929] border hover:border-[#292929] bg-[#292929] rounded-md text-white py-[9px] font-semibold'>{
                    isLoading ? <Spinner/> : "Sign up"
                }</button>
            </form>
            <h2 className=' mr-32 mt-3 mb-4 text-sm'><span className=' text-stone-700'>Already have an account? </span><a href='/auth/login' className=' font-medium text-stone-900 hover:text-stone-600 duration-300'>Sign in</a></h2>
            <div className=" flex items-center justify-center mb-4 text-stone-600">
                or
            </div>
            <div className='flex flex-col gap-y-2'>
                <button className='py-2 px-[4.5rem] rounded border border-[#bbbbbb] text-stone-700 flex items-center gap-x-4 font-inter'><ion-icon name="logo-google"></ion-icon>Continue with Google</button>
                <button className='py-2 px-[4.5rem] rounded border border-[#bbbbbb] text-stone-700 flex items-center gap-x-4 font-inter'><ion-icon name="logo-facebook"></ion-icon>Continue with Twitter</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default RegisterPage