import { useGSAP } from '@gsap/react'
import React, { useState } from 'react'
import gsap from 'gsap'

function Home() {
  useGSAP(() => {
    gsap.from('.home-devs',{
      x:-1000,
      duration:3,
    })
  }
  ,[])
  return (
    <div className='text-black font-mono bg-[#E5E5E5] p-2 rounded flex flex-col justify-center items-center self-center w-screen'>

        <div className='w-[70%] flex flex-col items-center md:flex-row md:justify-evenly home-devs'>
          <div className='rounded-[50%] bg-red-100 border-4 border-black w-[200px] md:w-max '>
            <img className='rounded-[50%] w-[100%] md:w-[600px]' src="https://avatars.githubusercontent.com/u/115772979?s=400&u=048db871df62327ae9ef3564d8e749d391219788&v=4" alt=""/>
          </div>

          <div className='flex flex-col justify-center items-start bg-[#E5E5E5] border-l-4 h-max border-black p-2 w-max home-devs'>
            <b className='text-2xl sm:text-3xl md:text-4xl'>Syed Sybtain</b>
            <b className=''>Python Full Stack Developer</b>
            <b className=''>Front End Developer</b>
            <b className=''>Computer Engineer</b>
          </div>
        </div>
        
        <div className='mt-2 p-2 w-[70%] home-devs'>
          <b className='text-2xl sm:text-3xl md:text-4xl border-b-4 border-black'>About MySelf</b>
          <p>
            I am Computer Engineer Graduated from Comsats University Islamabad. I have passion in AI, NLP, GenAI, Computer Vision and Python Development.
            This Passion leads me to do projects in these domains to learn advanced techniques and contribute in projects for the benefits of Society.
          </p>
        </div>
    </div>
  )
}

export default Home