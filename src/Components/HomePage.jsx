import './Home.css'
import { useState } from 'react'
import {Link} from 'react-router-dom'
function HomePage(props){
    const [sideBarClicked,openCloseSideBar]=useState(false)
    const [dropDownOpen,showDropDown]=useState(false)
    return(
        <>
        <div className='container bg-gradient-to-r  from-[#aac4d7] via-[#86c1f4] to-[#e258e2] relative min-h-screen overflow-hidden'>
        <nav className=' bg-gradient-to-r from-[#aac4d7] via-[#86c1f4] to-[#e258e2] w-full px-2 py-4 h-20 bg-gray-300 z-50 fixed  
        justify-between top-0 left-0 items-center text-xl
         text-shadow-black flex mx-auto'>
            <button
            onClick={()=>openCloseSideBar(!sideBarClicked)}
            className='  text-2xl font-bold'
            > &#9776;
            </button>
            {/* below is for profile  */}
            <button className='w-14 h-14 rounded-full  bg-black text-blue-50 font-extrabold'>
            {props.name}
            </button>
            
        </nav>
        {/* this below syntax is like if (true ) only execute  */}
        {sideBarClicked && (
                <div className='  w-64 min-h-screen flex-row 
                 z-50 bg-black py-18 px-18 justify-center items-center text-amber-50   '>
                    <div className='rounded-4xl overflow-hidden object-contain h-25 w-25 items-center justify-center'>
                        <img src="logo1.jpg" alt="logo" />
                    
                    </div>
                    <ul className=' py-10 '>
                        <li>
                        <button className='px-1font-semibold hover:text-gray-600 
                        rounded-4xl object-contain overflow-hidden'
                        onClick={()=>showDropDown(!dropDownOpen)

                        }>
                            Your Subjects

                        </button>
                        </li>
                        {dropDownOpen && (
                            <div className='text-right font-light flex-col'>
                                <div className='  flex mt-1 w-12 h-12 rounded-full items-center 
                                 justify-center align-middle border-2
                                  bg-gray-400 font-bold
                                  object-contain overflow-hidden'>
                                <img src="plus.png" alt="  Add "  className='w-8 h-8'/>
                                </div>
                                <br />
                                <ol>
                                    <li
                                    onClick={()=>alert('Switched to subject one ')}> sub1</li>
                                    <li> ....</li>
                                    <li> ....</li>
                                </ol>

                            </div>
                            
                        )}
                        
                       <Link to='/' className='flex items-center'>
                       <button className='hover:text-gray-400'
                        onClick={()=>alert('LOgged out succesfully')

                        }>Log Out</button>
                       </Link>
                    </ul>
                     

                </div>
            )}

        </div>
        </>
    )
}
export default HomePage