import React from 'react'
import { Link } from 'react-router-dom'

function Projects() {
  return (
    <div className='self-center w-[90%] rounded mt-4 flex flex-col justify-center items-center gap-2 p-1 bg-opacity-100'>
        <b className='text-4xl text-black'>Demo React Projects 😀</b>
        <div className='bg-neutral-900 p-1 w-max rounded-md border-b-2 hover:bg-[#E5E5E5] hover:text-black'><Link to='/projects/todo'>ToDo App</Link> </div>
        <div className='bg-neutral-900 p-1 w-max rounded-md border-b-2 hover:bg-[#E5E5E5] hover:text-black'><Link to='/projects/whiteboard'>White Board</Link> </div>
        <div className='bg-neutral-900 p-1 w-max rounded-md border-b-2 hover:bg-[#E5E5E5] hover:text-black'><Link to='/projects/stopwatch'>StopWatch</Link> </div>
        <div className='bg-neutral-900 p-1 w-max rounded-md border-b-2 hover:bg-[#E5E5E5] hover:text-black'><Link to='/projects/digitalclock'>Digital Clock</Link> </div>
        <div className='bg-neutral-900 p-1 w-max rounded-md border-b-2 hover:bg-[#E5E5E5] hover:text-black'><Link to='/'>MyPortfolio </Link> </div>
        <div className='bg-neutral-900 p-1 w-max rounded-md border-b-2 hover:bg-[#E5E5E5] hover:text-black'><Link to=''>More to Add ...</Link> </div>

    </div>
  )
}

export default Projects