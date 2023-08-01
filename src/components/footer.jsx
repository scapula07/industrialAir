import React from 'react'
import logo from "../assets/logofooter1.png"
import logoword from "../assets/logofooter.png"
import Contact from './contact'

export default function Footer() {
  return (
    <div className='flex w-full flex-col w-full px-8 space-y-20' style={{background:"rgba(20, 93, 166, 1)"}}>
        <div className='flex w-full space-x-8'>
                    <div className='flex flex-col w-1/2'>
                                <div className='grid grid-flow-row grid-cols-2  gap-4 gap-y-8 h-full w-full py-14'>

                                    <input 
                                    placeholder='Full name'
                                    className='px-4 py-3 rounded-sm text-sm font-serif'
                                    />
                                    <input 
                                        placeholder='E- mail'
                                        className='px-4 py-3 rounded-sm text-sm font-serif'
                                    />
                                    <input 
                                        placeholder='Phone Number'
                                        className='px-4 py-3 rounded-sm text-sm font-serif'
                                    />
                                    <input 
                                    placeholder='Select service'
                                    className='px-4 py-3 rounded-sm text-sm font-serif'
                                    />


                                </div>

                                    <div className='flex flex-col w-full space-y-9'>
                                        <textarea 
                                        
                                            className='px-4 py-8 rounded-lg text-sm w-full'
                                        />

                                        <button className='text-lg font-semibold w-44 py-3 text-white rounded-lg' style={{background: "rgba(6, 12, 27, 1)"}}>
                                        Send Message

                                        </button>


                                    </div>

                        </div>

      
             <Contact />

            </div>
            <div className='flex items-center w-full jsutify-between '>
                <div>
                    <img 
                    src={logo}
                
                    />

                </div>
               
                <div className='w-11/12 flex justify-end'>
                    <img 
                    src={logoword}
                    />

                </div>
               

            </div>

    </div>
  )
}
