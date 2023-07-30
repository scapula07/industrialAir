import React from 'react'
import service from  "../assets/service.png"




export default function Service() {
  return (
    <div className='relative w-full '>
        <img 
          src={service}
          className="w-full"
        />

        <div className='bottom-0 absolute w-full z-20 flex justify-center py-10'>
            <button className='px-8 py-3 rounded-lg text-white ' style={{background:"rgba(20, 93, 166, 1)"}}>
                Book Now

            </button>

        </div>
        
    </div>
  )
}
