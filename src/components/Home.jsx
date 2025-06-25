import { useGSAP } from '@gsap/react'
import React, { useState } from 'react'
import gsap from 'gsap'
import { FaPython,FaJs,FaHtml5, FaGithub } from 'react-icons/fa'
import { Fa0, Fa1, FaDocker, FaGit, FaGitAlt } from 'react-icons/fa6'
import { Si2Fas, SiDjango, SiJson, SiJsonwebtokens, SiLangchain, SiOllama, SiPostgresql, SiPytorch, SiReact, SiRust } from 'react-icons/si'
import { RiAiGenerate2, RiTailwindCssFill } from 'react-icons/ri'
import { PiOpenAiLogo } from 'react-icons/pi'
import { GiNuclearPlant, GiTorch } from 'react-icons/gi'
import { BiLogoDjango } from 'react-icons/bi'
import { TbBrandDjango, TbBrandVisualStudio } from 'react-icons/tb'
import { DiJekyllSmall } from 'react-icons/di'

function Home() {
  useGSAP(() => {
    gsap.from('.home-image',{
      x:-1000,
      duration:1,
      opacity:0,
    })
    gsap.from('.home-info',{
      x:500,
      duration:1,
      opacity:0,

    })
    gsap.from('.home-intro',{
      y:500,
      duration:1,
      opacity:0,

    })
    gsap.to("#spinDiv", {
      rotation: 360,
      repeat: -1,
      duration: 5,
      ease: "linear",
    });

  }
  ,[])
  return (
    <div className='text-black font-mono bg-[#E5E5E5] p-2 rounded flex flex-col justify-center items-center self-center w-screen'>

        <div className='w-[70%] flex flex-col items-center md:flex-row md:justify-evenly'>
          <div className='rounded-[50%] bg-red-100 border-4 border-black w-[200px] md:w-max home-image'>
            <img className='rounded-[50%] w-[100%] md:w-[600px]' src="https://avatars.githubusercontent.com/u/115772979?s=400&u=048db871df62327ae9ef3564d8e749d391219788&v=4" alt=""/>
          </div>

          <div className='flex flex-col justify-center items-start bg-[#E5E5E5] border-l-4 h-max border-black p-2 w-max home-info'>
            <b className='text-2xl sm:text-3xl md:text-4xl'>Syed Sybtain</b>
            <b className=''>Computer Engineer</b>
            <b className=''>Python Full Stack Developer</b>
            <b className=''>Front End Developer</b>
            <b className=''>AI Developer</b>

          </div>
        </div>
        
        <div className='mt-2 p-2 w-[70%] home-intro'>
          <b className='text-2xl sm:text-3xl md:text-4xl border-b-4 border-black'>About MySelf</b>
          <p>
            I am Computer Engineer Graduated from Comsats University Islamabad. I have passion in AI, NLP, GenAI, Computer Vision and Python Development.
            This Passion leads me to do projects in these domains to learn advanced techniques and contribute in projects for the benefits of Society.
          </p>
        </div>
        <div className=' mt-2 p-2 w-[70%] home-intro'>
          <div className='grid grid-cols-3 md:grid-cols-5 mt-2'>
            <FaPython className='hover:scale-[1.1] text-blue-700 text-4xl md:text-8xl'/>
            <FaJs className='hover:scale-[1.1] text-yellow-600 text-4xl md:text-8xl'/>
            <SiDjango className='hover:scale-[1.1] text-blue-700 text-4xl md:text-8xl'/>
            <SiReact id='spinDiv' className='hover:scale-[1.1] text-blue-500 text-4xl md:text-8xl'/>
            <SiLangchain className='hover:scale-[1.1] text-green-700 text-4xl md:text-8xl'/>
            <PiOpenAiLogo className='hover:scale-[1.1] text-black text-4xl md:text-8xl'/>
            <RiTailwindCssFill className='hover:scale-[1.1] text-blue-700 text-4xl md:text-8xl'/>
            <FaHtml5 className='hover:scale-[1.1] text-orange-700 text-4xl md:text-8xl'/>
            <SiPostgresql className='hover:scale-[1.1] text-sky-700 text-4xl md:text-8xl'/>
            <FaDocker className='hover:scale-[1.1] text-blue-600 text-4xl md:text-8xl'/>
            <RiAiGenerate2 className='hover:scale-[1.1] text-black text-4xl md:text-8xl'/>
            <FaGitAlt className='hover:scale-[1.1] text-orange-700 text-4xl md:text-8xl'/>
            <FaGithub className='hover:scale-[1.1] text-black text-4xl md:text-8xl'/>
            <SiPytorch className='hover:scale-[1.1] text-orange-700 text-4xl md:text-8xl'/>
            <TbBrandVisualStudio className='hover:scale-[1.1] text-sky-500 text-4xl md:text-8xl'/>

          </div>
          
        </div>
    </div>
  )
}

export default Home