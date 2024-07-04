import { Canvas } from '@react-three/fiber';
import React, { Suspense, useContext, useRef } from 'react'
import { FaConnectdevelop } from "react-icons/fa";
import FlyingRobo from './FlyingRobo'
import { Environment, Html } from '@react-three/drei';
import { AnimationStore } from '../Store/AnimationStore';
import Loader from './Loader';
import { Bounce, ToastContainer, toast } from "react-toastify";
import { motion,AnimatePresence } from 'framer-motion';
import { FaInstagram ,FaFacebook,FaLinkedin,FaGithub} from "react-icons/fa";
import { Link } from 'react-router-dom';
import Header from './Header';
const Contact = () => {
  let userRef=useRef();
  let mobileRef=useRef();
  let emailRef=useRef();
  let feedbackRef=useRef();
  let ratingRef=useRef(); 
  const {setTouch,sendMail}=useContext(AnimationStore)
  return (
    <>
    <header><Header/></header>
    <AnimatePresence>
    <motion.div className='flex flex-col'
     initial={{opacity:0}}
    animate={{
      opacity:1,
      transition:{
        duration:2,
      }
    }}
    exit={{
      opacity:0
    }}
    ><div><h2 className='text-center font-bold text-3xl font-mono text-neutral-50 m-3'>Connect with me</h2></div>
    <div className='flex flex-row'
    >
    <div className={`text-neutral-300 flex flex-col h-screen w-1/2 py-4 font-serif px-3`}  onMouseOver={()=>{
      setTouch(true)
    }} onMouseOut={()=>setTouch(false)}
    onTouchStart={()=>{
      setTouch(true)
    }} onTouchEnd={()=>setTouch(false)}
    >
      <label htmlFor="name">Your name</label>
      <input type="text" placeholder='enter your name here' className='my-3 px-2 text-orange-950 text-xl p-2 bg-slate-200 shadow-md drop-shadow-xl shadow-slate-400 rounded-lg' ref={userRef} name='user'/>
      <label htmlFor="number">Phone Number</label>
      <input type="tel" placeholder='enter your number here'  className='my-3 px-2 text-orange-950 text-xl p-2 bg-slate-200 shadow-md drop-shadow-xl shadow-slate-400 rounded-lg' ref={mobileRef}/>
      <label htmlFor="mail">E-mail</label>
      <input type="email" name="email" placeholder='enter your email here'  className='my-3 px-2 text-orange-950 text-xl p-2 bg-slate-200 shadow-md drop-shadow-xl shadow-slate-400 rounded-lg' ref={emailRef}/>
      <label htmlFor="feedback">Feedback</label>
      <textarea type="text" placeholder='enter your feedback'  className='my-3 px-2 text-orange-950 text-xl p-2 bg-slate-200 shadow-md drop-shadow-xl shadow-slate-400 rounded-lg' ref={feedbackRef}/>
      <label htmlFor="feedback">Rating</label>
      <select name="rate"  className='my-3 px-2 text-orange-950 text-xl p-2 bg-slate-200 shadow-md drop-shadow-xl shadow-slate-400 rounded-lg ' ref={ratingRef}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button className='self-start m-3 bg-indigo-400 p-3 rounded-2xl' onClick={()=>{sendMail(emailRef.current.value,userRef.current.value,mobileRef.current.value,feedbackRef.current.value,ratingRef.current.value)
      userRef.current.value=""
      emailRef.current.value=""
      mobileRef.current.value=""
      feedbackRef.current.value=""
      ratingRef.current.value=""
      }}>Connect<FaConnectdevelop className='inline-block text-teal-950 text-2xl'/></button>
    </div>
    <motion.div className={`w-1/2`}
    initial={{
      y:-window.innerHeight
    }}
    animate={{
        y:0,
      transition:{
        type:"spring",
        stiffness:4,
        damping:2
      }
    }}
    exit={{
      y:window.innerHeight
    }}
    >
    <div className='flex flex-wrap'>
    <Suspense fallback={<Loader/>} 
    >
    <Canvas style={{height:"100vh"}}>
      <FlyingRobo/>
      <Environment preset='studio'/>
    </Canvas>
    </Suspense>
    </div>
    <div className={'flex flex-col fixed top-12 right-0.5 z-30'}>
    <a href='https://www.instagram.com/nithin__kumar2/' target='_blank'>
    <FaInstagram className='shadow-skill m-3 text-3xl ' style={{height:"2.5rem",width:"2.5rem"}}/>
    </a>
    <a href='https://www.facebook.com/profile.php?id=100062150913192' target='_blank'>
    <FaFacebook className='shadow-skill m-3 text-3xl ' style={{height:"2.5rem",width:"2.5rem"}} />
    </a>
    <a href='https://www.linkedin.com/in/nithin-kumar-a922b82a3/' target='_blank'>
    <FaLinkedin className='shadow-skill m-3 text-3xl ' style={{height:"2.5rem",width:"2.5rem"}}/>
    </a>
    <a href='https://github.com/Nithin-2005-dev' target='_blank'>
    <FaGithub className='shadow-skill m-3 text-3xl ' style={{height:"2.5rem",width:"2.5rem"}}/>
    </a>
      </div>
    </motion.div>
    </div>
    </motion.div>
    <ToastContainer/>
    </AnimatePresence>
    </>
  )
}

export default Contact
