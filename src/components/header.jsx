import React from 'react'
import logo from "../assets/industrialLogo.png"

export default function Header() {
  return (
     <div className='w-full flex items-center justify-between px-24 py-4 bg-white'>
       
            <img
             src={logo}
             className="w-24"
             />
      
            <div className='flex items-center space-x-10 '>
                <h5 className='text-sm font-semibold text-white px-6 py-1 rounded-lg ' style={{background:"#145DA6"}}>HOME</h5>
                <h5 className='text-sm font-semibold'>About Us</h5>
                <h5 className='text-sm font-semibold'>SERVICES</h5>
                <h5 className='text-sm font-semibold'>WORKS</h5>
                <h5 className='text-sm font-semibold'>TESTIMONIALS</h5>
                <h5 className='text-sm font-semibold'>CONTACT</h5>

            </div>

     </div>
  )
}
