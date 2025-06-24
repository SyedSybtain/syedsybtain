import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

function Links() {
  const [show,setShow] = useState(false)
  const form = useRef()

  const handleMail = async(e) => {
    e.preventDefault()
    try{
      await emailjs.sendForm(
        'service_00oru9g','template_lk3l6ua',
        form.current,
        {publicKey: 'NRZ3Yo8i-ftH26uN4'}
      )
      alert("Successful")
    }
    catch(error){
      alert("Not Sent")
    }
  }

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

          <div className='bg-black text-black p-2 rounded-xl mt-8 w-[100%] md:w-[50%]  self-center absolute bottom-0'>
              <b>Get In Touch</b>
              <form className='flex flex-col gap-2' ref={form} onSubmit={handleMail}>
                <input className='p-1 rounded' type="text" name='name' placeholder='Your Name ...'  />
                <input className='p-1 rounded' type="email" name='email'  placeholder='Your Mail ...'  />
                <textarea className='p-1 rounded' type="text" name='message' placeholder='Message ...' />
                <button className='bg-white w-max p-1 rounded bg-green-600 text-white' type='submit' value='Send'>Send Email</button>
              </form>
            </div>
    </div>
  )
}

export default Links