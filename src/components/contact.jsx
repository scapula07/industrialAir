import React from 'react'
import {MdOutlineLocationOn} from "react-icons/md"
import {AiFillMail} from "react-icons/ai"
import {BsFillTelephoneFill} from "react-icons/bs"
export default function Contact() {
  return (
    <div className='w-1/2 py-8'>
        <div className='flex justify-center w-full'>
            <h5 className='text-4xl font-semibold text-white'>Contact us</h5>

        </div>

        <div className='flex flex-col py-4 space-y-6'> 
           <div className='flex items-center space-x-4'>
                <h5 className='bg-white rounded-lg flex items-center justify-center px-3 py-4'>
                    <MdOutlineLocationOn
                     className=' text-xl'
                     style={{color:"rgba(20, 93, 166, 1)"}}
                     />
                </h5>
                <h5 className='text-white font-semibold text-sm font-serif'>ADDRESS:  220 US Hwy 82 W, New Boston, Texas, United States</h5>

             </div>
             <div className='flex items-center space-x-4'>
                <h5 className='bg-white rounded-lg flex items-center justify-center px-3 py-4'>
                    <AiFillMail
                     className='text-xl'
                     style={{color:"rgba(20, 93, 166, 1)"}}
                     />
                </h5>
                <h5 className='text-white font-semibold text-sm font-serif'>Email:  industrialairNB@gmail.com</h5>

             </div>
             <div className='flex items-center space-x-4'>
                <h5 className='bg-white rounded-lg flex items-center justify-center px-3 py-4'>
                    <BsFillTelephoneFill
                     className=' text-xl'
                     style={{color:"rgba(20, 93, 166, 1)"}}
                     />
                </h5>
                <h5 className='text-white font-semibold text-sm font-serif'>Phone:  +1 903-628-5276</h5>

             </div>

        </div>

    </div>
  )
}
