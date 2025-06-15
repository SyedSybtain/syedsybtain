import React from 'react'
import { Tldraw } from 'tldraw'
import 'tldraw/tldraw.css'

function WhiteBoard() {
  return  <div className='w-screen h-[600px] self-center flex items-center justify-center p-1'>
    < Tldraw persistenceKey='example'/>
</div>
}

export default WhiteBoard