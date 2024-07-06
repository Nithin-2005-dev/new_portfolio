import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { MdLight } from "react-icons/md";
import { degrees } from 'three/examples/jsm/nodes/Nodes.js';
const Header = () => {
    const [isDark,setDark]=useState(true)
  return (<div>
      <nav className='flex justify-end gap-10 h-10 py-5 px-5 font-light playwrite-de-grund-hi -z-40'>
        <NavLink to="/" className={({isActive})=>isActive?"text-orange-300 [text-shadow:_0rem_0.1rem_0.5rem_rgb(255_244_255_/_50%)] font-extrabold":"text-white"}>Home</NavLink>
         <NavLink to="/about" className={({isActive})=>isActive?"text-orange-300 [text-shadow:_0rem_0.1rem_0.5rem_rgb(255_244_255_/_50%)] font-extrabold":"text-white"}>About</NavLink>
          <NavLink to="/projects"className={({isActive})=>isActive?"text-orange-300 [text-shadow:_0rem_0.1rem_0.5rem_rgb(255_244_255_/_50%)] font-extrabold":"text-white"}>Projects</NavLink>
             <NavLink to="/contact" className={({isActive})=>isActive?"text-orange-300 [text-shadow:_0rem_0.1rem_0.5rem_rgb(255_244_255_/_50%)] font-extrabold":"text-white"}>Connect</NavLink>
      </nav>
    {/* {isDark? <div className='text-gray-400 text-3xl m-3 absolute top-10 z-10 bulb-box cursor-grabbing'>
    <MdLight className='bulb [text-shadow:_1rem_0.5rem_5rem_rgb(255_244_255_/_100%)] ' onClick={()=>setDark(!isDark)}/>
    </div>: <div className='text-gray-400 text-3xl m-3 absolute top-10 z-10'>
    <MdLight className=' [text-shadow:_1rem_0.5rem_5rem_rgb(255_244_255_/_100%)] cursor-grab' onClick={()=>setDark(!isDark)}/>
    </div>} */}
    </div>
  )
}

export default Header
