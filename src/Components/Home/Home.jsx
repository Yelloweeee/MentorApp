import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div>
         <div className=" min-h-screen bg-gradient-to-r from-[#aac4d7] via-[#86c1f4] to-[#e258e2] p-6 relative  overflow-hidden" 
            
        >
        
       
        
        {/* now this is the  middle content of the page  */}
        
        
        <div className=' flex mt-[10px] min-h-screen  w-full  items-center justify-center text-center px-4'>
            <section className=" text-black h-screen shadow-fuchsia-950 container relative text-4xl text-shadow-blue-500 font-normal flex flex-col items-center justify-center ">
          {/* <Link to='/SignupPage'>
          <button className="px-4 py-2 mb-1 bg-blue-100 text-black font-semibold 
               rounded-4xl border-b-4 border-b-blue-500 hover:bg-cyan-950 transition duration-200 
               shadow-md hover:shadow-lg ">
                 Get Started 
               </button>
          </Link> */}
             <h1 className="relative px-2  font-extrabold text-3xl sm:text-4xl md:text-6xl text-center "> 
            
            
                <pre >
                  Personalized AI Tutoring,
                </pre>
                <pre>Smarter Learning.</pre>
             </h1>
         <br />
         <p className=' text-center text-sm sm:text-base md:text-lg  px-4 sm:px-2  sm:py-3 '>
            Experience intelligent,<br /> user-adaptive learning powered by an advanced Retrieval-Augmented Generation (RAG) <br />
            Our AI tailors content, explanations, and problem-solving to your unique learning style — in real time.
         </p>
        
        
        </section>
        
        
        <div className='w-full min-h-full px-4 sm:px-6 md:px-10 mt-8 '>
            <div className='overflow-hidden rounded-4xl shadow-lg'>
        
        <img src="https://images.pexels.com/photos/247819/pexels-photo-247819.jpeg"
        className='object-cover w-full h-auto' alt="" />
            
            </div>
        </div>
        
        
        </div>
        
        {/* Till here is the  middle content of the page  */}
            </div>
    </div>
  )
}

export default Home