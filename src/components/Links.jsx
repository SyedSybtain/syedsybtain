import React, { useState } from 'react'

function Links() {
  const [show,setShow] = useState(false)

  return (
    <div className='w-[90%] text-black self-center mt-4 p-1 flex flex-col text-center'>
      <b className='text-2xl sm:text-3xl md:text-4xl font-mono slef-center'>Personal Info/Links</b>  
          <button className='text-2xl sm:text-3xl md:text-4xl w-max self-center animate-bounce' onClick={() => setShow(!show)}> {show ? " Hide 🙈" : "Show 👀"} </button>
          <div className={show ? 'flex flex-col self-center text-start w-max' : 'flex flex-col self-center blur-sm text-start w-max'}>
            <div>Email : <a href="mailto:sybtainsyed@gmail.com">sybtainsyed@gmail.com 📩</a> </div>
            <div>Phone : 03458843285 📞  </div>
            <div>LinkedIn : <a href="https://www.linkedin.com/in/syed-sybtain/">My LinkedIn 🖇️ </a> </div>
            <div>GitHub : <a href="https://github.com/SyedSybtain">My Github 🖇️ </a> </div>
            <div>CV : <a href="https://drive.google.com/drive/folders/1zPUd-yFNVw7njvxileZMBZNGApmC5bqc?usp=drive_link">Download Link 🖇️</a> </div>
            <div>Address : KPK, Pakistan 📌 </div>
          </div>
    </div>
  )
}

export default Links