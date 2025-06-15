import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex justify-between p-2 bg-black items-center max-w-screen'>
        <div className='bg-neutral-900 p-1 rounded-[50%] border-2 min-w-[50px] max-w-[50px]'>
          <Link to='/'>
            <img className='rounded-[50%] ' src="https://lh3.googleusercontent.com/a/ACg8ocL_A23RouQyWCQWn0u75sc8Hxq1-JAK-cDEhZseZm5yreG6IV4=s288-c-no" alt="Syed Sybtain" />
          </Link>
        </div>
        <div className='flex justify-between bg-yellow-0 min-w-[80%] p-0 items-center justify-between'>
          <div className='bg-neutral-900 p-1 rounded-md border-l-4 w-max hover:bg-white hover:text-black'><Link to='/profile'>About</Link> </div>
          <div className='bg-neutral-900 p-1 rounded-md border-l-4 w-max hover:bg-white hover:text-black'><Link to='/projects'>ReactJS Projects</Link> </div>
          <div className='bg-neutral-900 p-1 rounded-md border-l-4 w-max hover:bg-white hover:text-black'><Link to='/links'>Links</Link> </div>
        </div>
    </div>
  )
}

export default Navbar