import React, { useContext } from 'react'
import Header from './Header'
import { ToastContainer } from 'react-toastify'
import { AnimationStore } from '../Store/AnimationStore'
import { FaWhatsapp } from "react-icons/fa";
const ConnectedUsers = () => {
  const {userDetails}=useContext(AnimationStore)
  let greet;
  let time=new Date();
  console.log(time.getHours())
  if(time.getHours()>=0 && time.getHours()<=12){
    greet="good morning,"
  }else if(time.getHours()>12 && time.getHours()<=5){
    greet="good afternoon,"
  }else{
    greet="good evening,"
  }
  return (
    <>
    <Header></Header> 
    <section>
    <div className='flex flex-col gap-3 m-5 border p-3 bg-slate-500 bg-opacity-20 shadow-md shadow-slate-300'>
    <div className='text-rose-400 text-xl capitalize font-serif font-extrabold'>{greet+userDetails.displayName}</div>
    <div className='text-pink-500 text-base font-mono font-medium'>Welcome back to my portfolio!</div>
    <div className='text-fuchsia-200 italic font-extralight'>Thank you so much for connecting with me! I truly appreciate your interest in my work and projects. Your support and feedback mean a lot and help me grow and improve. If you have any questions or suggestions, feel free to reach out. I look forward to staying connected and sharing more exciting projects with you in the future!
</div>
<pre className='text-purple-500 font-semibold'>
Best regards,<br></br>
Nithin
</pre>
<div className='text-white mx-3 text-lg capitalize font-semibold'>connect me in whatsapp<a href='https://wa.me/918179133593?text=Hey%20Nithin' target='_blank'><FaWhatsapp className='inline-block mx-3 bg-green-600 p-1 text-4xl rounded-2xl'/></a></div>
</div>

    </section>
    </>
  )
}

export default ConnectedUsers
