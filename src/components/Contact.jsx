import { Canvas } from '@react-three/fiber';
import React, { Suspense, useContext } from 'react'
import { FaConnectdevelop } from "react-icons/fa";
import FlyingRobo from './FlyingRobo'
import { Environment, Html } from '@react-three/drei';
import { AnimationStore } from '../Store/AnimationStore';
import Loader from './Loader';
import { motion,AnimatePresence } from 'framer-motion';
const Contact = () => {
  const {setTouch}=useContext(AnimationStore)
  return (
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
    ><div><h2 className='text-center font-bold text-3xl font-mono text-neutral-50 my-3'>Connect with me</h2></div>
    <div className='flex flex-row'
    >
    <div className={`text-neutral-300 flex flex-col h-screen w-1/2 m-5 font-serif`}  onMouseOver={()=>{
      setTouch(true)
    }} onMouseOut={()=>setTouch(false)}
    onTouchStart={()=>{
      setTouch(true)
    }} onTouchEnd={()=>setTouch(false)}
    >
      <label htmlFor="name">Your name</label>
      <input type="text" placeholder='enter your name here' className='my-3 px-2 text-orange-950 text-xl p-2 bg-slate-200 shadow-md drop-shadow-xl shadow-slate-400'/>
      <label htmlFor="number">Phone Number</label>
      <input type="tel" placeholder='enter your number here'  className='my-3 px-2 text-orange-950 text-xl p-2 bg-slate-200 shadow-md drop-shadow-xl shadow-slate-400'/>
      <label htmlFor="mail">E-mail</label>
      <input type="email" placeholder='enter your email here'  className='my-3 px-2 text-orange-950 text-xl p-2 bg-slate-200 shadow-md drop-shadow-xl shadow-slate-400'/>
      <label htmlFor="feedback">Feedback</label>
      <textarea type="text" placeholder='enter your feedback'  className='my-3 px-2 text-orange-950 text-xl p-2 bg-slate-200 shadow-md drop-shadow-xl shadow-slate-400'/>
      <label htmlFor="feedback">Rating</label>
      <select name="rate"  className='my-3 px-2 text-orange-950 text-xl p-2 bg-slate-200 shadow-md drop-shadow-xl shadow-slate-400'>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button className='self-start m-3 bg-indigo-400 p-3 rounded-2xl'>Connect<FaConnectdevelop className='inline-block text-teal-950 text-2xl'/></button>
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
    </motion.div>
    </div>
    </motion.div>
    </AnimatePresence>
  )
}

export default Contact
