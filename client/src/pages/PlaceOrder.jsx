import { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import CartTotal from '../components/CartTotal'
import Title from '../components/Title'
import { ShopContext } from '../context/shopContext'
// import { useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const PlaceOrder = () => {
  const {navigate,backend_url,token,cartItems,setCartItems,getCartAmount,delivery_fee,products} = useContext(ShopContext)

  const [method,setMethod] = useState('cod')
  
  const [formData,setFormData] = useState({
    firstName:'',
    lastName:'',
    email:'',
    street:'',
    city:'',
    state:'',
    country:'',
    zipcode:'',
    phone:''
  })

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    setFormData(prev=>({...prev,[name]:value}))
  }

  const handleSubmit = async (e)=>{
    e.preventDefault()
    try {


      let orderItems = []

      for(const items in cartItems){
        for(const item in cartItems[items]){
          if(cartItems[items][item] > 0){
            const iteminfo = structuredClone(products.find(product=>product._id === items))
            if(iteminfo){
              iteminfo.size = item
              iteminfo.quantity = cartItems[items][item]
              orderItems.push(iteminfo)
            }
          }
        }
      }

      let orderData = {
        address:formData,
        items:orderItems,
        amount:getCartAmount() + delivery_fee
      }

      switch(method){
        case 'cod':
          const response = await axios.post(backend_url+'/api/order/place',orderData,{headers:{token}})
          console.log(response)
          if(response.data.success){
            setCartItems({})
            navigate('/orders')
          }else{
            toast.error(response.data.message)
          }
          break;

          case 'stripe':
            const responseStripe = await axios.post(backend_url + '/api/order/stripe', orderData, {headers:{token}})
            console.log(responseStripe)
            if(responseStripe.data.success){
              const {session_url} = responseStripe.data
              window.location.replace(session_url)
            }else{
              toast.error(responseStripe.data.message)
            }
            break;

        default:
          break;
      }


    } catch (error) {
      console.log(error)
    }
  }

  // useEffect(()=>{
  //   handleSubmit()
  // },[])

  return (
    <form onSubmit={handleSubmit} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* Left Side */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'Delivery'} text2={'Information'} />
        </div>

        <div className='flex gap-3'>
          <input required  onChange={handleChange} value={formData.firstName} name='firstName' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='First Name' type="text" />
          <input required onChange={handleChange} value={formData.lastName} name='lastName' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Last Name' type="text" />
        </div>
        <input required onChange={handleChange} value={formData.email} name='email' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Enter Email' type="email" />
        <input required onChange={handleChange} value={formData.street} name='street' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Street' type="text" />
        <div className='flex gap-3'>
          <input required onChange={handleChange} value={formData.city} name='city' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='City' type="text" />
          <input required onChange={handleChange} value={formData.state} name='state' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='State' type="text" />
        </div>
        <div className='flex gap-3'>
          <input required onChange={handleChange} value={formData.zipcode} name='zipcode' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Zip Code' type="number" />
          <input required onChange={handleChange} value={formData.country} name='country' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Country' type="text" />
        </div>
        <input required onChange={handleChange} value={formData.phone} name='phone' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Phone' type="number" />

      </div>
      {/* Left Side */}

      {/* Right Side */}
      <div className='mt-8'>

        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>

        <div className='mt-12'>
          <Title text1={'Payment'} text2={'Method'}/>
        </div>
        {/* Payment Method */}
        <div className='flex gap-3 flex-col'>

          <div onClick={()=>setMethod('stripe')}  className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
            <img className='h-5 mx-4' src={assets.stripe_logo}/>  
          </div>

          <div  onClick={()=>setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
            <p className='text-gray-500 tex-sm font-medium mx-4'>Cash On Delivery</p>  
          </div>

          {/* <div onClick={()=>setMethod('razorpay')}  className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
            <img className='h-5 mx-4' src={assets.razorpay_logo}/>  
          </div> */}

          {/* <div className='w-full text-end mt-8'> */}
            <button type='submit' className='cursor-pointer bg-black text-white px-16 py-3 text-sm'>Place Order</button>
          {/* </div> */}

        </div>
        {/* Payment Method */}


      </div>
      {/* Right Side */}

    </form>
  )
}

export default PlaceOrder
