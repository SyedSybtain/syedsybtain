import React, { useEffect, useRef, useState } from 'react'

function Stopwatch() {
    const [runnig, setRunning] = useState(false)
    const [elapsed,setElapsed] = useState(0)
    const intervalID = useRef(null)
    const startTimeRef = useRef(0)
    useEffect(() => {
        if(runnig){
            intervalID.current = setInterval(() => {
                setElapsed(Date.now() - startTimeRef.current)
            },10)
        }

        return () => { clearInterval(intervalID.current)}

    }, [runnig])

    function start(){
        setRunning(true)
        startTimeRef.current = Date.now() - elapsed
    }

    function stop(){
        setRunning(false)
    }

    function reset(){
        setRunning(false)
        setElapsed(false)
    }

    function timeSet(){
        let hours = Math.floor(elapsed / (1000 * 60 * 60))
        let mins = Math.floor(elapsed / ( 1000 * 60 ) % 60)
        let secs = Math.floor(elapsed / (1000) % 60)
        let millisecs = Math.floor (elapsed % 1000 / 10)

        hours = String(hours).padStart(2,'0')
        mins = String(mins).padStart(2,'0')
        secs = String(secs).padStart(2,'0')
        millisecs = String(millisecs).padStart(2,'0')

        return `${hours} : ${mins} : ${secs} : ${millisecs}`
    }

  return (
    <div className='w-[90%] mt-4 bg-[#121212] bg-opacity-100 rounded-xl flex flex-col items-center p-8  gap-4 self-center'>Stopwatch
        <div className='w-[80%] h-[200px] bg-[#121212] rounded-xl content-center text-center'>{timeSet()}</div>
        <div className='flex justify-center items-center gap-4'>
            <button className='bg-green-900 p-4 h-max rounded' onClick={start} > Start</button>
            <button className='bg-red-900 p-4 h-max rounded' onClick={stop} > Stop</button>
            <button className='bg-yellow-900 p-4 h-max rounded' onClick={reset} > Reset</button>
        </div>
    </div>
  )
}

export default Stopwatch