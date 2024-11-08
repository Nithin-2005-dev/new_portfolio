import React, { useContext, useRef, useState } from 'react'
import { AnimationStore } from '../Store/AnimationStore';
import { FaConnectdevelop } from "react-icons/fa";
import BtnLoader from './BtnLoader';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from './Firebase';
const AlreadyConnect = ({setConnected}) => {
const {sendMail,setTouch,signIn,search,userDetails,message}=useContext(AnimationStore)
const [forgot,setforgot]=useState(false);
  let emailRef=useRef();
  let passwordRef=useRef();
  return (
    <div className={`text-neutral-300 flex flex-col w-1/2 py-4 font-serif px-3`}  onMouseOver={()=>{
        setTouch(true)
      }} onMouseOut={()=>setTouch(false)}
      onTouchStart={()=>{
        setTouch(true)
      }} onTouchEnd={()=>setTouch(false)}
      style={{height:"50%"}}
      >
      {!forgot?<div className='flex flex-col'>
        <label htmlFor="mail">E-mail</label>
        <input type="email" name="email" placeholder='enter your email here'  className='my-3 px-2 text-orange-950 text-md p-2 bg-slate-200 shadow-md drop-shadow-xl shadow-slate-400 rounded-lg' ref={emailRef}/>
        <label htmlFor="password">Password</label>
        <input type="password" name="email" placeholder='enter password here'  className='my-3 px-2 text-orange-950 text-md p-2 bg-slate-200 shadow-md drop-shadow-xl shadow-slate-400 rounded-lg' ref={passwordRef}/>
        <div className='flex flex-wrap flex-row'>
        <button className='self-start m-3 bg-indigo-400 p-3 rounded-2xl' onClick={()=>{signIn(emailRef.current.value,passwordRef.current.value)
        emailRef.current.value=""
        passwordRef.current.value=""
        }}>{!search?"Connect":<BtnLoader/>}
          <FaConnectdevelop className={`inline-block text-teal-950 text-2xl`} style={{display:search?"none":"inline-block"}}/></button>
        <button className='self-start m-3 bg-indigo-400 py-4 px-3 rounded-2xl text-xs font-bold' onClick={()=>{
            setConnected(false)
        }}>want to connect?</button>
        <button className='self-start m-3 bg-red-400 py-4 px-1 rounded-2xl text-xs font-bold' onClick={()=>{
            setforgot(true)
        }}>Can't Remember Password?</button>
        </div>
        </div>:<div className='flex flex-col'>
        <label htmlFor="mail">E-mail</label>
        <input type="email" name="email" placeholder='enter your email here'  className='my-3 px-2 text-orange-950 text-md p-2 bg-slate-200 shadow-md drop-shadow-xl shadow-slate-400 rounded-lg' ref={emailRef}/>
        <button className='self-start m-3 bg-red-400 py-4 px-5 rounded-xl text-xs font-bold' onClick={()=>{
          if(emailRef.current.value==""){
            message("enter")
          }else{
            sendPasswordResetEmail(auth,emailRef.current.value)
            message("reset")
            emailRef.current.value==""
          }
        }}>send reset link</button>
        <button className='self-start m-3 bg-indigo-400 py-4 px-3 rounded-2xl text-xs font-bold' onClick={()=>{
            setforgot(false);
        }}>password known?</button>
        </div>}
      </div>
  )
}

export default AlreadyConnect
