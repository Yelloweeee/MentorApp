import React from 'react'
import {Link,NavLink} from 'react-router-dom'


function Header() {
  return (
   <header className="shadow sticky z-50 top-0">
 <nav className="fixed top-0 left-0 z-50  mx-auto flex w-full items-center justify-between px-3 py-5 text-xl ">
            {/* this is the nav bar section   */}
            <div className='object-cover overflow-hidden h-30 w-30'>
                <div className="  container relative  rounded-full h-20 w-20 object-contain overflow-hidden">
                <img src="logo.jpg" alt="logo"  />
                </div>
            </div>
            <div  className='flex flex-col sm:flex-row gap-2 sm:gap-4 items-center'>
            <Link to='/SignupPage' className='flex items-center'>
             <button className="px-6 py-2 bg-purple-300 text-black font-semibold
               rounded-2xl border-b-4 border-b-cyan-500 hover:bg-cyan-950 transition duration-200 
               shadow-md hover:shadow-lg">
                  Sign Up
               </button>
               </Link>
             
            
              <Link to ='LoginPage' className='flex items-center'>
               <button className=" mx-2 px-6 py-2 bg-purple-300 text-black rounded-2xl border-b-4 
                border-cyan-500 hover:bg-cyan-950 font-semibold
                transition duration-200 shadow-md hover:shadow-lg">
              Login
               </button>
              </Link>
            </div>
     
            {/* Till here the nav bar section */}
        </nav>
   </header>
  )
}

export default Header