import React, { Suspense, useContext, useState } from 'react'
import SkullModel from './SkullModel'
import Card from './Card'
import HelloRobo from './HelloRobo'
import {AnimatePresence, motion} from 'framer-motion'
import Loader from './Loader'
import { ToastContainer } from 'react-toastify'
import Header from './Header'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { AnimationStore } from '../Store/AnimationStore'
import { MdOutlinePower ,MdOutlinePowerOff} from "react-icons/md";
import { IoMdArrowDropleft,IoMdArrowDropright } from "react-icons/io";
import { FaDotCircle } from "react-icons/fa";
const Home = () => {
  const {roboOn,setRobo,setPosition,position}=useContext(AnimationStore)
  return (<>
    <section>
    <header><Header/></header>
     <motion.div className="flex flex-wrap"
     initial={{opacity:0,y:window.innerHeight,
     }}
     animate={{opacity:1,y:0,
     transition:{
      duration:2,
     }
     }}
    exit={{opacity:0,
    
    }}
     >
    <Suspense fallback={<Loader/>}>
    <Canvas style={{height:"90vh"}}>
    <HelloRobo scale={window.innerWidth<500?3.5:6} />
    <Environment preset='studio'/>
    </Canvas>
    {(position=="front" && roboOn) && <div style={{width:"50vw",right:"30%"}} className='absolute top-1/4 bg-opacity-70 bg-gray-800'>
      <p className='text-sm text-emerald-50 font-bold z-30 border p-4 bodoni-moda-sc shadow-md shadow-slate-50 robot md:text-2xl'>Hello, I'm  Nithin. I am currently pursuing a B.Tech in Electrical Engineering at NIT Silchar. I have a strong interest in web development. I am eager to continue exploring and growing in the web development domain.
</p>
    </div>}
    {(position=="right" && roboOn) && <div style={{width:"20vw",right:"2%"}} className='absolute top-1/4 bg-opacity-70 bg-gray-800'>
      <p className='text-sm text-emerald-50 font-bold z-30 border p-4 bodoni-moda-sc shadow-md shadow-slate-950 robot md:text-2xl'>
      Enjoy exploring my portfolio with its immersive 3D experience. Dive in and discover the projects I've been working on. Enjoy your visit!
</p>
    </div>}
    {(position=="left" && roboOn) && <div style={{width:"20vw"}} className='absolute top-1/4 bg-opacity-70 bg-gray-800 left-2'>
      <p className='text-sm text-emerald-50 font-bold z-30 border p-4 bodoni-moda-sc shadow-md shadow-slate-950 robot md:text-2xl'>Welcome!<br></br>
I'm thrilled to have you here. Enjoy exploring and feel free to reach out with any questions. Happy browsing!
</p>
    </div>}
    </Suspense>
      </motion.div>
      <button className='fixed top-8 left-0 text-white text-4xl m-3 rotate-90'>{!roboOn?<MdOutlinePower onClick={()=>{setRobo(!roboOn)}} className=''/>:<MdOutlinePowerOff  onClick={()=>{setRobo(!roboOn)}} className='text-red-600'/>}</button> 
      <div className='absolute top-20 left-1/2 text-white text-6xl -mx-14 flex flex-row'>
        <button><IoMdArrowDropleft onClick={()=>{setPosition("left")}} style={{color:position=="left"?'green':'white'}}/></button>
        <button><FaDotCircle onClick={()=>{setPosition("front")}} className='text-4xl my-3 -mx-2' style={{color:position=="front"?'green':'white'}}/></button>
        <button><IoMdArrowDropright onClick={()=>{setPosition("right")}} style={{color:position=="right"?'green':'white'}}/></button>
      </div>
    </section>
    </>
  )
}

export default Home
