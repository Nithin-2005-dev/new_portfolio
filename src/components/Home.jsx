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
const Home = () => {
  const {roboOn,setRobo}=useContext(AnimationStore)
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
    <HelloRobo scale={window.innerWidth<600?4:6} />
    <Environment preset='studio'/>
    </Canvas>
    {roboOn && <div style={{width:"50vw",right:"30%"}} className='absolute top-1/4 bg-opacity-70 bg-gray-800'>
      <p className='text-sm text-emerald-50 font-bold z-30 border-2 p-4 bodoni-moda-sc shadow-md shadow-slate-50 robot md:text-2xl'>Hello, I'm  Nithin. I am currently pursuing a B.Tech in Electrical Engineering at NIT Silchar. I have a strong interest in web development. I am eager to continue exploring and growing in the web development domain.
</p>
    </div>}
    </Suspense>
      </motion.div>
      <button className='fixed top-8 left-0 text-white text-4xl m-3 rotate-90'>{!roboOn?<MdOutlinePower onClick={()=>{setRobo(!roboOn)}} className=''/>:<MdOutlinePowerOff  onClick={()=>{setRobo(!roboOn)}} className='text-red-600'/>}</button> 
    </section>
    </>
  )
}

export default Home
