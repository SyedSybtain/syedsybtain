import React, { useState } from 'react'

function Home() {
  const [query,setQuery] = useState("")
  const [list,setList] = useState([])

  function addQuery(){
    const newItem = query;
    setList(([...list,newItem]))
  }

  return (
    <div className='text-black font-mono bg-[#E5E5E5] p-2 rounded flex flex-col justify-center items-center self-center max-w-screen'>
        <div className='rounded-[50%] bg-red-100 border-4 border-black min-w-[40%]'>
          <img className='rounded-[50%] w-[100%]' src="https://lh3.googleusercontent.com/a/ACg8ocL_A23RouQyWCQWn0u75sc8Hxq1-JAK-cDEhZseZm5yreG6IV4=s288-c-no" alt=""/>
        </div>

        <div className='flex flex-col justify-center items-start bg-[#E5E5E5] border-l-4 border-black p-2 w-max'>
          <b className='text-4xl'>Syed Sybtain</b>
          <b className=''>Python Full Stack Developer</b>
          <b className=''>Front End Developer</b>
          <b className=''>Computer Engineer</b>
        </div>
        
        <div className='mt-2 p-2 w-[80%]'>
          <b className='border-b-4 border-black text-4xl'>About MySelf</b>
          <p>
            I am Computer Engineer Graduated from Comsats University Islamabad. I have passion in AI, NLP, GenAI, Computer Vision and Python Development. 
            This Passion leads me to do projects in these domains to learn advanced techniques and contribute in projects for the benefits of Society.
          </p>
        </div>
    </div>
  )
}

export default Home