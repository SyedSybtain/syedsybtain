import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex justify-between py-2 bg-black items-center w-screen'>
        <div className='bg-neutral-900 p-1 rounded-full border-2 min-w-[50px] max-w-[50px]'>
          <Link to='/'>
            <img className='rounded-full' src="https://avatars.githubusercontent.com/u/115772979?s=400&u=048db871df62327ae9ef3564d8e749d391219788&v=4" alt="Syed Sybtain" />
          </Link>
        </div>
        <div className='flex justify-between bg-yellow-0 w-[80%] p-0 items-center justify-between text-xs md:text-2xl md:px-4'>
          <div className='bg-neutral-900 p-1 rounded-md border-l-4 w-max hover:bg-white hover:text-black'><Link to='/profile'>About</Link> </div>
          {/* <div className='bg-neutral-900 p-1 rounded-md border-l-4 w-max hover:bg-white hover:text-black'><Link to='/solar3d'>3D Solar⭐</Link> </div> */}
          <div className='bg-neutral-900 p-1 rounded-md border-l-4 w-max hover:bg-white hover:text-black'><Link to='/projects'>ReactJS</Link> </div>
          <div className='bg-neutral-900 p-1 rounded-md border-l-4 w-max hover:bg-white hover:text-black'><Link to='/links'>Links</Link> </div>
        </div>
    </div>
  )
}

export default Navbar