import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/header'
import './App.css'
import hero from  "./assets/hero.png"
import group from  "./assets/group.png"
import frame from  "./assets/frame.png"
import service from  "./assets/service.png"
import Service from './components/service'
import Works from './components/works'
import Testimonials from './components/testimonials'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="relative  w-screen    overflow-x-hidden h-screen">
         <div className='fixed w-full bg-white z-30'>
            <Header />
          </div>

          <div className='w-full'>
            <img 
             src={hero}
             className="w-full"
           />

           <div className='flex  w-full'>
               <div className='w-1/2 flex flex-col px-20 py-10'>
                  <div className='flex flex-col py-4 space-y-10'>
                    <h5 className='text-5xl font-semibold' style={{color:"#145DA6"}}>ABOUT US</h5>

                    <div className='text-sm font-semibold' style={{color:"#ABACAE"}}>
                         <p>
                           Industrial Air Systems, owned by Mike Welch & Ed Stephenson, is under the new management of Jared Parker and Whitney Parker of New Boston, TX. Both local to the area, Jared & Whitney are striving to offer premier HVAC service and installation.
                        </p> 
                        <br></br>

                        <p>

                            Jared has 15 years of experience installing and servicing HVAC equipment. He completed his HVAC certification training in 2009 and is a licensed and insured HVACR contractor. Jared is also a licensed Journeyman Electrician and Master Plumber in the state of Texas and is dedicated to continually learning more about the trades and using that knowledge to provide the best customer service possible.

                        </p>


                    </div>

                  </div>
                  

               </div>

               <div className='relative w-1/2' >
                  <img 
                    src={group}
                    className="w-full"
                  />

                  <div className='absolute top-0 h-full w-full bg-blue-900 opacity-80 flex py-10 px-8 ' style={{background:"#145DA6"}}>
                    <img 
                      src={frame}
                      className="relative z-20"
                    />

                  </div>
                
                  </div>

                 

           </div>
           <Service />
           <Works />
           <Testimonials />
           <Footer />

          </div>
    </div>
  )
}

export default App
