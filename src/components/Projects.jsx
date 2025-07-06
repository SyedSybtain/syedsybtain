import { useGSAP } from '@gsap/react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { FaReact } from 'react-icons/fa'

function Projects() {
  useGSAP(() => {
    gsap.from('#project-head',{
      x:-1500,
      duration:1,
    })
    gsap.from('.project-item',{
      x:700,
      opacity:0,
      duration:0.5,
      stagger:0.1
    })
    gsap.to('#reactLogo',{
      rotation: 360,
      repeat:-1,
      duration:5,
      ease:'linear',
    })
  },[])

  return (
    <div className='self-center w-[90%] rounded mt-4 flex flex-col justify-center items-center gap-2 p-1 bg-opacity-100'>
        <b id='project-head' className='text-sm sm:text-2xl md:text-4xl text-black flex'>Demo React Projects <FaReact id='reactLogo' className='text-blue-800'/> </b>
        <div className='bg-neutral-900 p-1 w-max rounded-md hover:bg-[#E5E5E5] hover:text-black hover:border-2 hover:border-black project-item'><Link to='/solar3d'>3D Solar System</Link> </div>
        <div className='bg-neutral-900 p-1 w-max rounded-md hover:bg-[#E5E5E5] hover:text-black hover:border-2 hover:border-black project-item'><Link to='/projects/todo'>ToDo App</Link> </div>
        <div className='bg-neutral-900 p-1 w-max rounded-md hover:bg-[#E5E5E5] hover:text-black hover:border-2 hover:border-black project-item'><Link to='/projects/whiteboard'>White Board</Link> </div>
        <div className='bg-neutral-900 p-1 w-max rounded-md hover:bg-[#E5E5E5] hover:text-black hover:border-2 hover:border-black project-item'><Link to='/projects/stopwatch'>StopWatch</Link> </div>
        <div className='bg-neutral-900 p-1 w-max rounded-md hover:bg-[#E5E5E5] hover:text-black hover:border-2 hover:border-black project-item'><Link to='/projects/digitalclock'>Digital Clock</Link> </div>
        <div className='bg-neutral-900 p-1 w-max rounded-md hover:bg-[#E5E5E5] hover:text-black hover:border-2 hover:border-black project-item'><Link to='/'>MyPortfolio </Link> </div>
        <div className='bg-neutral-900 p-1 w-max rounded-md hover:bg-[#E5E5E5] hover:text-black hover:border-2 hover:border-black project-item'><Link to=''>More to Add ...</Link> </div>

    </div>
  )
}

export default Projects