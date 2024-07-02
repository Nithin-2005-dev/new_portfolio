import React, { useState } from 'react'
import { FaSkull } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import {motion} from 'framer-motion'
const Card = () => {
    const [showMsg,setMsg]=useState(false);
  return (
    <>
      <div className="text-blue-400  bg-white rounded-lg px-1 py-2 shadow-lg shadow-white font-extrabold flex flex-col z-30 card-setter mx-10 my-5" >
      {!showMsg && <motion.div className='flex cursor-grabbing '
      onClick={()=>{setMsg(!showMsg)}}
      ><FaSkull className='p-1 text-2xl  whileHover={
        {
            scale:1.2,
            transition:{
                duration:2,
            }
        }
      }
      whileTap={{
        scale:2,
        transition:{
          duration:2,
        },
        color:"red",
      }}
      initial={{scale:1,opacity:1}}
      animate={{
        scale:1.5,
        transition:{
              type:"spring",
              stiffness:2,
            damping:1,
        }
      }}'/></motion.div>}
        {showMsg && <motion.div
        transition={
          {
            layout:Atomics,
            duration:3,
          }
        }
        whileHover={{
            color:"red",
            boxShadow:"1rem 1rem 10rem 3rem red",
            transition:{
              duration:5,
            }
        }}
         className='font-normal text-rose-950 cursor-pointer [text-shadow:_0rem_0rem_0.5rem_rgb(255_0_0_/_100%)]' id="msg" onClick={()=>{setMsg(!showMsg)}} onTouchStart={()=>{
          document.getElementById("msg").classList.add("ani") 
         }} onTouchEnd={()=>{
          document.getElementById("msg").classList.remove("ani") 
         }}>Welcome to my portfolio – where creativity meets passion. Enjoy your visit!</motion.div>
            }</div>
    </>
  )
}
export default Card