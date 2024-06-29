import React, { useState } from 'react'
import { FaSkull } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import {motion} from 'framer-motion'
const Card = () => {
    const [showMsg,setMsg]=useState(false);
  return (
    <>
      <div className="text-blue-400  bg-white rounded-lg px-1 py-2 shadow-lg shadow-white font-extrabold flex flex-col z-30 card-setter mx-10 my-5" >
      {!showMsg && <motion.div layout className='flex cursor-grabbing '
      whileHover={
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
                type:"spring",
                stiffness:300,
                damping:150,
            },
        color:"red",
      }}
      animate={{
        scale:1.5,
        transition:{
            type:"spring",
            stiffness:1,
            damping:0,
        }
      }}
      onClick={()=>{setMsg(!showMsg)}}
      ><FaSkull className='p-1 text-2xl '/>
        </motion.div>}
        {showMsg && <motion.div
        whileHover={{
            color:"red",
            boxShadow:"1rem 1rem 10rem red"
        }}
         className='font-normal text-rose-950 cursor-pointer [text-shadow:_0rem_0rem_0.5rem_rgb(255_0_0_/_100%)]' onClick={()=>{setMsg(!showMsg)}}>Welcome to my portfolio – where creativity meets passion. Enjoy your visit!</motion.div>
            }</div>
    </>
  )
}
export default Card