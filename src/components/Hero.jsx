import React from 'react'
import HeroImage from '../assets/Hero imagebg.png'
import { IoDownloadOutline } from "react-icons/io5";
import CV from '../assets/KENNETH CVpdf.pdf'


import "../index.css"
import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'

const Hero = () => {

    const ref = useRef(null)

    const OpenCV = () =>{
        const link = document.createElement('a')
        link.href = CV
        link.download = 'Karikari-Apau_Kenneth_CV.png'
        link.click()
        document.body.removeChild(link)
    }

    useLayoutEffect(()=>{
        let ctx = gsap.context(()=>{
            const t1 = gsap.timeline()
            
            t1.
            // from('#intro-slider', {
            //     xPercent:"-100",
            //     duration: 1.3,
            //     delay: 0.3
            // }).from(['#title-1', '#title-2', '#title-3'],{
            //     opacity: 0,
            //     y: "+=30",
            //     stagger: 0.5
            // }).to(['#title-3', '#title-2', '#title-1'],{
            //     opacity: 0,
            //     y: "-=30",
            //     delay: 0.3,
            //     stagger: 0.5
            // }).to('#intro-slider', {
            //     xPercent:"-100",
            //     duration: 1.3,
            // }).
            from("#home", {
                opacity: 0,
                y: '-=100',
                duration: 0.5,
            }).from(['#greeting', "#name", "#description"],{
                opacity: 0,
                x: "+=90",
                stagger: 0.5,
                yPercent: 60,
                ease: 'elastic.out',
                duration: 2
            }).from('#picture',{
                opacity: 0,
                y: '-=400',
                duration: 2,
                ease: 'elastic.out(1)',
            })
            // .from('#button', {
            //     opacity: 0,
            //     y: '-=100',
            //     delay:0.3,
            //     duration: 2,
            //     ease: 'elastic.out(1)',
            // })
           
        }, ref)

        return () => ctx.revert()
    }, [])

  return (
    <div className='relative' ref={ref}>
        {/* <div 
         id='intro-slider'
         className='h-screen text-gray-300 bg-gradient-to-tr from-gray-950 to-gray-800 pt-40 absolute top-0 left-0 z-10 w-full flex flex-col gap-10 tracking-tight'>
            <h1 id='title-1' className='text-2xl sm:text-4xl text-center justify-center md:text-5xl lg:text-7xl font-semibold'>Software Engineer</h1>
            <h1 id='title-2' className='text-2xl sm:text-4xl text-center justify-center md:text-5xl lg:text-7xl font-semibold'>Mobile App Dev</h1>
            <h1 id='title-3' className='text-2xl sm:text-4xl text-center justify-center md:text-5xl lg:text-7xl font-semibold'>Freelancer</h1>
        </div> */}
        <div className='text-gray-900 h-1/2 md:h-screen items-center justify-center mx-auto' id='home'>
        <div className='h-full w-full'>
            <div className='flex h-full justify-evenly items-center mx-6 sm:mx-8 md:mx-20'>
                <div
                    id='picture'
                    className='hidden md:block relative md:w-1/2 lg:w-1/2'>
                        <div className='absolute top-[-200px] rounded-full bg-primary shadow-xl shadow-red-500 h-[400px] w-[400px] inset-0 mx-auto'>
                            <img className='absolute h-[800px] w-[1000px] top-[-370px]' src={HeroImage} alt="" />
                        </div> 
                </div>
                <div className='flex-1 mt-32 mb-10 md:mt-0 md:mb-0 md:ml-40 md:w-1/2 p-20'>
                    <p id='greeting' className='mb-8 text-xl md:text-2xl lg:text-3xl font-medium text-gray-300 font-mono'>--- HELLO <span className='text-2xl md:text-3xl lg:text-4xl'>😃</span></p>
                    <h1>
                        <span id='name'
                                className='text-3xl md:text-5xl lg:text-6xl text-gray-400 font-bold'>I'm <span className='text-primary'>Karikari-Apau</span> Kenneth</span>
                        <div id='description' className='flex-1 mt-4 text-gray-500'>
                            Flutter Mobile App Developer and Front-end Web Developer looking to achieve so much more in the technology industry.
                        </div>

                    </h1>
                    <button id='button' onClick={OpenCV} className='flex px-5 py-3 text-primary border border-red-400 hover:shadow-lg hover:shadow-red-500 font-medium mt-32 mb-20 md:mt-20 md:mb-0 transform duration-500 hover:scale-105'><IoDownloadOutline className='mr-2 text-primary text-2xl'/>Download CV</button>
                </div>
            </div>
        </div>
        
        </div>
    </div>
    
  )
}

export default Hero