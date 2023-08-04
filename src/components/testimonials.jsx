import React from 'react'
import test1 from "../assets/test1.png"
import test2 from "../assets/test2.png"
import test3 from "../assets/test3.png"
import test4 from "../assets/test5.png"
import service from "../assets/service1.png"
export default function Testimonials() {
  return (
     <div className='flex items-center flex-col w-full space-y-7 py-16 px-20'> 
       <div className='flex flex-col space-y-1 items-center'>
         <h5 className='text-3xl font-semibold ' style={{color:"rgba(20, 93, 166, 1)"}}>TESTIMONIALS</h5>
         <h5 className='text-sm font-light text-center'>Here’s a  review of what our clients have to say
             about our services
              </h5>

       </div>

       <div className='flex items-center '>
        {/* {[test1,test2,test3,test4].map((src)=>{
             return(
                <img 
                src={src}
                />
             )
        })

        } */}
         <img 
         src={service}
        />
       </div>
        

   

    </div>
  )
}
