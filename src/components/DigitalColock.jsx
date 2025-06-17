import React, { useEffect, useState } from 'react'


function DigitalColock() {
    const [time,setTime] = useState(new Date())
    
    useEffect(() => {
        const intervalId = setInterval(() => 
        {setTime(new Date())},1000
        )
        return () => {
            clearInterval(intervalId)
        }
    },
    [])
    function TimeFormat(){
        let hours = time.getHours()
        let noon = hours <= 12 ? "AM" : "PM"
        hours = hours % 12 || 12
        let mins = time.getMinutes()
        let secs = time.getSeconds()
        
        return `${padZero(hours)}:${padZero(mins)}:${padZero(secs)} ${noon}`
    }

    function padZero(number){
        return (number < 10 ? '0' : '') + number
    }
  return (
    <div className='w-[90%] h-[500px] self-center mt-4 h-full bg-[#121212] bg-opacity-100 flex flex-col justify-center items-center p-4 rounded-xl text-3xl'>Digital Colock
        <div className='flex flex-col items-center text-2xl sm:text-3xl md:text-4xl justify-center w-[50%] h-[200px] bg-[url(https://img.freepik.com/premium-photo/searchlight-neon-brick-wall-with-smoke-neon-reflections-wet-asphalt-empty-scene-with-copy-space_117255-1836.jpg?semt=ais_hybrid&w=740)] bg-cover bg-no-repeat rounded-xl'>
            {TimeFormat()}
        </div>
    </div>
  )
}

export default DigitalColock