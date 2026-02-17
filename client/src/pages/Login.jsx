import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/shopContext"
import axios from "axios"
import { toast } from "react-toastify"


const Login = () => {
  const [currentState,setCurrentState] = useState('Login')
  const {token,setToken,navigate,backend_url} = useContext(ShopContext)

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const onSubmitHandler = async (e)=>{
    e.preventDefault()
    try {

      if(currentState === 'Sign Up'){
        const singnUp = await axios.post(backend_url+'/api/user/register',{name,email,password})
        if(singnUp.data.success){
          setToken(singnUp.data.token)
          localStorage.setItem("token",singnUp.data.token)
          toast.success("Regitered Succesfully")
          setCurrentState('Login')
        }else{
          toast.error(singnUp.data.message)
        }


      }else{
        const login  = await axios.post(import.meta.env.VITE_BACKEND_URL+'/api/user/login',{email,password})
        if(login.data.success){
          setToken(login.data.token)
          localStorage.setItem("token",login.data.token)
          toast.success("Login Succesfully")
        }else{
          toast.error(login.data.message)
        }
      }
    } catch (error) {
      console.error(error)
      toast.error(error.message)
    }

  }

  useEffect(()=>{
    if(token){
      navigate('/')
    }
  },[token])

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      { currentState == 'Login' ? '' : <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name" type="text" className="w-full px-3 py-2 border-gray-800"  required />}
      <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" type="email" className="w-full px-3 py-2 border-gray-800"  required />
      <input value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" type="password" className="w-full px-3 py-2 border-gray-800"  required />

      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot Your Password</p>
        {
          currentState == 'Login'
          ? <p onClick={()=>setCurrentState('Sign Up')} className="cursor-pointer">Create Account</p>
          : <p onClick={()=>setCurrentState('Login')} className="cursor-pointer">Login Here</p>
        }
      </div>

      <button className="bg-black text-white font-light px-8 py-2 mt-4">{currentState == 'Login' ? 'Sign In' : 'Sign Up'}</button>

    </form>
  )
}

export default Login
