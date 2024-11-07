import React, { useContext, useEffect, useState } from 'react'
import Header from './Header'
import { ToastContainer } from 'react-toastify'
import { AnimationStore } from '../Store/AnimationStore'
import { FaWhatsapp } from "react-icons/fa";
import BlogCard from './BlogCard';
import { VscDebugDisconnect } from "react-icons/vsc";
import {AnimatePresence, motion} from 'framer-motion'
const blogs=[
  {
    title:'Electra Society Website for NIT Silchar',
    body:`I developed a dynamic website for the Electra Society of NIT Silchar, aimed at enhancing student engagement and providing a centralized hub for resources, event updates, and departmental information. This platform serves the Electrical Engineering Department, showcasing student activities, academic resources, and society events, creating an interactive space for students, faculty, and visitors.,
    `,
    source:'https://github.com/ElectraSociety/Electra_Website.git'
  },
  {
  title:"completed my new portfolio",
  body:`🎉 My New Portfolio is Live! 🎉 \n
I'm excited to announce that my updated portfolio is now complete! It showcases my latest projects and skills. Check it out and let me know your thoughts. Your feedback is invaluable!!! Now you can explore the source code...keep coding..Have a great day.`,
source:"https://github.com/Nithin-2005-dev/new_portfolio.git"
},{
  title:"My Journey into the World of Java",
  body:"I’ve recently started exploring the Java programming language. As an aspiring computer scientist and web developer, Java’s versatility, object-oriented approach, and strong community support make it an ideal choice. I began by learning the basics and gradually moved to object-oriented programming and core libraries. Despite challenges like mastering the syntax and error handling, hands-on projects have greatly enhanced my understanding.I'm excited to continue this journey and see where Java takes me!",
  source:null,
}]
const ConnectedUsers = () => {
  const {userDetails,disconnect}=useContext(AnimationStore)
  const [pop,setPop]=useState(false)
  let greet;
  let time=new Date();
  if(time.getHours()>=5 && time.getHours()<12){
    greet=`Good morning,${userDetails.displayName}! Hope you're having a wonderful start to your day`
  }else if(time.getHours()>=12 && time.getHours()<17){
    greet=`Good afternoon,${userDetails.displayName}! Hope your day is going well. `
  }else if(time.getHours()>=17 && time.getHours()<21){
    greet=`Good evening,${userDetails.displayName}! Hope you're having a relaxing evening`
  }else{
    greet=`Good night,${userDetails.displayName}! Hope you're enjoying your night`
  }
  return (
    <AnimatePresence>
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1,
    transition:{
      duration:2,
      staggerChildren:1
    }
    }}
    >
    <div style={{opacity:pop?'0.1':'1'}}>
    <Header></Header>
    <section>
    <motion.div initial={{opacity:0}} whileInView={{
      opacity:1,
      transition:{
        duration:2
      }
    }} viewport={{
      amount:0.5
    }} className='flex flex-col gap-3 m-5 border p-3 bg-slate-500 shadow-md shadow-slate-300 bg-opacity-20'>
    <div className='text-rose-400 text-xl capitalize font-serif font-extrabold'>{greet}</div>
    <div className='text-pink-500 text-base font-mono font-medium'>Welcome back to my portfolio!</div>
    <div className='text-fuchsia-200 italic font-extralight'>Thank you so much for connecting with me! I truly appreciate your interest in my work and projects. Your support and feedback mean a lot and help me grow and improve. If you have any questions or suggestions, feel free to reach out. I look forward to staying connected and sharing more exciting projects with you in the future!
</div>
<pre className='text-purple-500 font-semibold'>
Best regards,<br></br>
Nithin
</pre>
<div className='flex justify-between'>
<div className='text-white mx-3 text-lg capitalize font-semibold'>connect me in whatsapp<motion.a href='https://wa.me/918179133593?text=Hey%20Nithin' target='_blank'><FaWhatsapp className='inline-block mx-3 bg-green-600 p-1 text-4xl rounded-2xl'/></motion.a>
</div>
<button className='bg-red-500 p-2 rounded-lg text-white font-bold hover:scale-110' onClick={()=>setPop(true)}>Disconnect<VscDebugDisconnect className='inline-block text-2xl mx-1' onClick={{}}/></button>
</div>
</motion.div>
<div className='flex justify-center'><p className='text-purple-300 text-lg text-center font-bold [text-shadow:_0rem_0.1rem_0.5rem_rgb(255_244_255_/_80%)] my-5 p-2 inline-block w-1/2 shadow-lg shadow-slate-800 rounded-2xl capitalize'>checkout my Blogs here</p></div>
{/* <p className='text-white text-center m-10 p-7 font-medium text-xl'>No blogs yet</p> */}
<div className='flex flex-col items-center'>
  {blogs.map((blog)=>{
    return <BlogCard blog={blog}/>
  })}
</div>
    </section>
    </div>
    {pop && <div  className={`absolute text-white top-1/2 bg-red-500 p-5 rounded-lg opacity-100 z-30  ${window.innerWidth<700?'w-3/4':'w-1/2'}`} style={{opacity:1,right:window.innerWidth<700?"12.5vw":"25vw"}}>
  <p className={`${window.innerWidth<700?'text-sm':'text-lg'} font-semibold`}>Are you sure to disconnect with Nithin?</p>
  <div className='flex justify-between p-1 m-1 font-bold'><button className={`bg-indigo-300 rounded-xl p-2 hover:scale-110 ${window.innerWidth<700?'text-xs':'text-lg'}`} onClick={()=>{
    disconnect()
  }}>Yes I'm sure</button><button className={`bg-indigo-300 rounded-xl p-2 hover:scale-110 ${window.innerWidth<700?'text-xs':'text-lg'}`} onClick={()=>{
    setPop(false)
  }}>Not sure</button></div>
</div>}
    
</motion.div>
</AnimatePresence>
  )
}

export default ConnectedUsers
