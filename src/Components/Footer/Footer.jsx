import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className=" border-y bg-gradient-to-r from-[#aac4d7] via-[#86c1f4] to-[#e258e2] ">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className=" md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src="logo.jpg"
                                className="w-20 h-20 rounded-full"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="grid  grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 align-middle">
                        <div >
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">
                                        Home
                                    </Link>
                                </li>
                                
                            </ul>
                        </div>
                        
                        
                        
                    </div>
                </div>
            </div>
        </footer>
    );
}