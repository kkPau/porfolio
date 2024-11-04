import React, { useState } from 'react'
import { CiHome } from "react-icons/ci";
import { FaInfo } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import { FaCode } from "react-icons/fa";
import { MdOutlineContactPage } from "react-icons/md";

import logo from '../assets/logo1.mp4'

const Navbar = () => {
    const handleScroll= (id)=>{
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' });
    }

    // const [activeSection, setActiveSection] = useState('')

  return (
    <nav className='fixed left-0 right-0 top-0 z-10 bg-transparent flex items-center justify-between px-6 py-3 text-gray-200'>
        <div className='px-4 mt-0 mx-auto container py-2 bg-transparent flex justify-center md:justify-between items-center '>
            <div className='text-3xl font-bold hidden md:inline'>
                <div className='flex space-x-6'>
                    <video className='w-10 h-10 object-cover'
                        src={logo}
                        itemType='video.mp4' 
                        muted
                        autoPlay
                        loop
                        controls
                    />
                    <div className='text-primary'>Kenneth</div>
                </div>
            </div>
            <div className='flex bg-black px-8 py-4 rounded-[20px] text-center font-sans md:text-base lg:text-lg space-x-4 lg:space-x-14 '>
                <div onClick={()=> handleScroll('home')} className='hover:text-primary'>
                    <CiHome className='neon-nav mx-auto'/>
                    <button onClick={()=> handleScroll('home')}>Home</button>
                </div>
                <div onClick={()=> handleScroll('about')} className='hover:text-primary'>
                    <FaInfo className='neon-nav mx-auto '/>
                    <button onClick={()=> handleScroll('about')}>About</button>
                </div>
                <div onClick={()=> handleScroll('services')} className='hover:text-primary'>
                    <GrServices className='neon-nav mx-auto '/>  
                    <button onClick={()=> handleScroll('services')}>Services</button> 
                </div>
                <div onClick={()=> handleScroll('projects')} className='hover:text-primary'>
                    <FaCode className='neon-nav mx-auto '/>
                    <button onClick={()=> handleScroll('projects')}>Projects</button>
                </div>
                <div onClick={()=> handleScroll('contact')} className='hover:text-primary'>
                    <MdOutlineContactPage className='neon-nav mx-auto '/>
                    <button onClick={()=> handleScroll('contact')}>Contact</button>
                </div>
            </div>
            
        </div>
    </nav>
  )
}

export default Navbar