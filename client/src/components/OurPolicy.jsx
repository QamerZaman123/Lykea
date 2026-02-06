import {assets} from '../assets/assets'

const OurPolicy = () => {
  return (
    <>
        <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
            <div>
                <img src={assets.exchange_icon} className='w-12 m-auto mb-5' />
                <p className='font-semibold'>Easy Exchange Policy</p>
                <p className='text-gray-400'>we offer easy  exchange policy</p>
            </div>
            
            <div>
                <img src={assets.quality_icon} className='w-12 m-auto mb-5' />
                <p className='font-semibold'>Premium Quality</p>
                <p className='text-gray-400'>Get best premium products</p>
            </div>

            <div>
                <img src={assets.support_img} className='w-12 m-auto mb-5' />
                <p className='font-semibold'>Best Customer Support</p>
                <p className='text-gray-400'>24/7 Customer Support</p>
            </div>

        </div>
    </>
  )
}

export default OurPolicy