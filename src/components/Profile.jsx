import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
import { FaPython,FaJs,FaHtml5, FaGithub } from 'react-icons/fa'
import { FaDocker, FaGitAlt } from 'react-icons/fa6'
import { SiAutocad, SiDjango, SiGreensock, SiLangchain, SiNextdotjs, SiPostgresql, SiPytorch, SiReact, SiThreedotjs } from 'react-icons/si'
import { RiAiGenerate2, RiTailwindCssFill } from 'react-icons/ri'
import { PiOpenAiLogo } from 'react-icons/pi'
import { TbBrandVisualStudio } from 'react-icons/tb'

function Profile() {
  const languages = ["Python" ,"JavaScript", "Matlab", "PostgreSQL", "C/C++", "Assembly", "Verilog", "VHDL"]
  const frameWorks = ["DJANGO","ReactJS","Pytorch", "TensorFlow", "Numpy", "Pandas", "Scikit-Learn", "Matplotlib", "OpenCV"]
  const techStack = ["Git/Github", "Docker", "AWS", "MySQL", "DJANGO", "DRF", "Raspberry Pi", "Vercel"]
  const interests = ["AI", "ML", "GenAI", "NLP", "Computer Vision", "IoT", "LLM’s", "Fine Tuning AI Models", "Integrating AI with WEB"]

  useGSAP(() => {
    gsap.from('.about-dev',{
      x:1500,
      stagger:0.4,
      duration:2,
      opacity:0,
    })
    gsap.to("#spinDiv", {
      rotation: 360,
      repeat: -1,
      duration: 5,
      ease: "linear",
    })
  
  },[])

  return (
    <div className='text-black w-[90%] p-2 self-center flex flex-col items-center'>

      <div className='text-2xl sm:text-3xl md:text-4xl font-bold border-b-4 w-[90%] text-center border-black self-center about-dev'>About Me</div>
      
      <div className='w-[90%] mt-4 border-b-2 border-black about-dev'>
        <b className='text-2xl sm:text-3xl md:text-4xl'>Education</b>
        <li>BS Computer Engineering</li>
        <p>Comsats University Islamabad</p>
      </div>
      
      <div className='border-b-2 border-black w-[90%] mt-4 about-dev'>
        <b className='text-2xl sm:text-3xl md:text-4xl'>Projects</b>
        <li><b className=''>FYP-AUTOMATIC VEHICLECHECK-INCHECK-OUT USING IOT AND DEEPLEARNING</b></li>
        <p className='text-md font-serif'>This was my FYP Project to develop a smart system for Campus vehicles entering at the gate. 
          Using IoT we limit the functionality of Camera and then deploy YOLOv7 model on Raspberry Pi to detect Vehicle Type,
          License Plate and Individual License Characters and Store results for Logging.</p>
        <li><b className=''>ANCIENT ROMAN COIN CLASSIFICATION USING DEEPLEARNING</b></li>
        <p className='text-md font-serif'>Trained and Analyze the Performance of Yolov3, Yolov4, Yolov5, Yolov7 and Yolov8 for Classification of Roman Coins. 
          I Contributed with Training and Fine Tuning of Different Model Versions and Sizes.</p>
        <li><b className=''>REMOTE FIRE AND SMOKE DETECTION</b></li>
        <p className='text-md font-serif'>Developed a Real-Time Yolov5 model of different sizes to detect the smoke and fire for remote safety application.</p>
      </div>
      
      <div className="border-b-2 border-black w-[90%] mt-4 about-dev">
        <b className='text-2xl sm:text-3xl md:text-4xl'>Skills</b>
        {/* <div className='grid grid-cols-2 justify-center'>
          <div className='w-max border-2 border-black mt-2 p-2 rounded'>
            <b className=''>Languages</b>
            {languages.map((lang,i) => <li key = {i}>{lang}</li>  )}
          </div>
          <div className=' w-max border-2 border-black mt-2 p-2 rounded'>
            <b className=''>Frame-Works</b>
            {frameWorks.map((fw,j) => <li key={j}>{fw}</li> )}
          </div>
          <div className='w-max border-2 border-black mt-2 mb-2 p-2 rounded'>
            <b className=''>Tech-Stack</b>
            {techStack.map((techs,k) => <li key={k}>{techs}</li> )}
          </div>
        </div> */}
        <div className=' mt-2 p-2 w-[100%]'>
          <div className='grid grid-cols-3 md:grid-cols-5 mt-2 gap-2 justify-items-center'>
            <FaPython className='hover:scale-[1.1] text-blue-700 text-4xl md:text-8xl'/>
            <FaJs className='hover:scale-[1.1] text-yellow-600 text-4xl md:text-8xl'/>
            <SiDjango className='hover:scale-[1.1] text-green-900 text-4xl md:text-8xl'/>
            <SiReact id='spinDiv' className='hover:scale-[1.1] text-blue-500 text-4xl md:text-8xl'/>
            <SiNextdotjs className='hover:scale-[1.1] text-black text-4xl md:text-8xl'/>
            <SiLangchain className='hover:scale-[1.1] text-green-700 text-4xl md:text-8xl'/>
            <PiOpenAiLogo className='hover:scale-[1.1] text-black text-4xl md:text-8xl'/>
            <SiThreedotjs className='hover:scale-[1.1] text-black text-4xl md:text-8xl'/>
            <RiTailwindCssFill className='hover:scale-[1.1] text-blue-700 text-4xl md:text-8xl'/>
            <SiGreensock className='hover:scale-[1.1] text-green-700 text-4xl md:text-8xl'/>
            <FaHtml5 className='hover:scale-[1.1] text-orange-700 text-4xl md:text-8xl'/>
            <SiPostgresql className='hover:scale-[1.1] text-sky-700 text-4xl md:text-8xl'/>
            <FaDocker className='hover:scale-[1.1] text-blue-600 text-4xl md:text-8xl'/>
            <RiAiGenerate2 className='hover:scale-[1.1] text-black text-4xl md:text-8xl'/>
            <FaGitAlt className='hover:scale-[1.1] text-orange-700 text-4xl md:text-8xl'/>
            <FaGithub className='hover:scale-[1.1] text-black text-4xl md:text-8xl'/>
            <SiPytorch className='hover:scale-[1.1] text-orange-700 text-4xl md:text-8xl'/>
            <TbBrandVisualStudio className='hover:scale-[1.1] text-sky-500 text-4xl md:text-8xl'/>
            <SiAutocad className='hover:scale-[1.1] text-red-700 text-4xl md:text-8xl'/>
          </div>
          
        </div>
      </div>

      
      <div className=' w-[90%] mt-4 p-2 rounded about-dev'>
        <b className='text-2xl sm:text-3xl md:text-4xl'>Interests</b>
        {interests.map((ints,l) => <li key={l}>{ints}</li>)}
      </div>
    </div>
  )
}

export default Profile