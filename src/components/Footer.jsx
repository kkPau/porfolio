import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className='text-gray-300 py-8'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <div className='flex flex-col md:flex-row md:space-x-12 items-center mb-4'>
                <div className='flex-1 mb-4 md:mb-0'>
                <h3 className='text-2xl font-bold mb-2'>Kenneth</h3>
                <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nihil dicta eos quam autem, enim, culpa, praesentium atque perferendis voluptatum sunt alias est? Possimus eaque facilis et. Expedita, provident voluptatibus!</p>
                </div>
                <div className='flex-1 w-full'>
                    <form action="" className='flex items-center justify-center'>
                        <input type="email" placeholder='Enter Email' className='w-full p-2 text-gray-900 rounded bg-white border focus:outline-none focus:border-red-500'/>
                        <button type='submit' className='text-primary border border-red-400 hover:shadow-lg hover:shadow-red-500 px-4 py-2 rounded-r-lg transform duration-300 hover:scale-105'>Subscribe</button>
                    </form>
                </div>
            </div>

            <div className='border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center'>
                <p className='text-gray-400'>&copy; {new Date().getFullYear()} Kenneth. All rights reserved</p>
                <div className='flex space-x-4 my-4 md:my-0 text-2xl'>
                    <a href="http://x.com/jayyyykx" target='_blank'><FaSquareXTwitter className='hover:text-blue-500'/></a>
                    <a href="http://linkedin.com/in/kenneth-karikari-apau-b1a6152a2" target='_blank'><FaLinkedin className='hover:text-blue-500'/></a>
                    <a href="http://github.com/kkPau" target='_blank'><FaGithub className='hover:text-blue-500'/></a>
                </div>
                <div className='flex space-x-4'>
                    <a href="">Privacy</a>
                    <a href="">Terms of Services</a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer