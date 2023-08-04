import React from 'react'
import works from "../assets/work1.png"

export default function Works() {
  return (
    <div className='flex items-center flex-col w-full space-y-7 py-16'> 
      <h5 className='text-3xl font-semibold ' style={{color:"rgba(20, 93, 166, 1)"}}>OUR WORKS</h5>

      <img 
        src={works}
      />

    </div>
  )
}
