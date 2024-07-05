import React, { useContext, useRef } from 'react'
import { AnimationStore } from '../Store/AnimationStore';
import { FaConnectdevelop } from "react-icons/fa";
import BtnLoader from './BtnLoader';
const ConnectPage = ({setConnected}) => {
const {sendMail,setTouch,signUp,search}=useContext(AnimationStore)
  let userRef=useRef();
  let mobileRef=useRef();
  let emailRef=useRef();
  let proffesionRef=useRef();
  let passwordRef=useRef();
  let feedbackRef=useRef();
  let ratingRef=useRef(); 
  let messageRef=useRef(); 
  return (
    <div className={`text-neutral-300 flex flex-col w-1/2 py-4 font-serif px-3`}  onMouseOver={()=>{
        setTouch(true)
      }} onMouseOut={()=>setTouch(false)}
      onTouchStart={()=>{
        setTouch(true)
      }} onTouchEnd={()=>setTouch(false)}
      >
        <label htmlFor="name">Your name</label>
        <input type="text" placeholder='enter your name here' className='my-3 px-2 text-orange-950 text-sm p-2 bg-slate-200 shadow-md drop-shadow-xl shadow-slate-400 rounded-lg' ref={userRef} name='user'/>
        <label htmlFor="number">Phone Number</label>
        <input type="tel" placeholder='enter your number here'  className='my-3 px-2 text-orange-950 text-sm p-2 bg-slate-200 shadow-md drop-shadow-xl shadow-slate-400 rounded-lg' ref={mobileRef}/>
        <label htmlFor="mail">E-mail</label>
        <input type="email" name="email" placeholder='enter your email here'  className='my-3 px-2 text-orange-950 text-sm p-2 bg-slate-200 shadow-md drop-shadow-xl shadow-slate-400 rounded-lg' ref={emailRef}/>
        <label htmlFor="password">Password</label>
        <input type="password" name="email" placeholder='enter pssword here'  className='my-3 px-2 text-orange-950 text-sm p-2 bg-slate-200 shadow-md drop-shadow-xl shadow-slate-400 rounded-lg' ref={passwordRef}/>
        <label htmlFor="profession">Your Proffesion</label>
        <input type="text" name="email" placeholder='enter your proffesion here'  className='my-3 px-2 text-orange-950 text-sm p-2 bg-slate-200 shadow-md drop-shadow-xl shadow-slate-400 rounded-lg' ref={proffesionRef}/>
        <label htmlFor="message">Any message to me</label>
        <textarea type="text" name="message" placeholder='enter your message(optional)'  className='my-3 px-2 text-orange-950 text-sm p-2 bg-slate-200 shadow-md drop-shadow-xl shadow-slate-400 rounded-lg' ref={messageRef}/>
        <label htmlFor="feedback">Feedback</label>
        <textarea type="text" placeholder='enter your feedback'  className='my-3 px-2 text-orange-950 text-sm p-2 bg-slate-200 shadow-md drop-shadow-xl shadow-slate-400 rounded-lg' ref={feedbackRef}/>
        <label htmlFor="feedback">Rating</label>
        <select name="rate"  className='my-3 px-2 text-orange-950 text-sm p-2 bg-slate-200 shadow-md drop-shadow-xl shadow-slate-400 rounded-lg ' ref={ratingRef}>
          <option value="1">1 &#128528;</option>
          <option value="2">2 &#128522;</option>
          <option value="3">3 &#128523;</option>
          <option value="4">4 &#128536;</option>
          <option value="5">5 &#128525;</option>
        </select>
        <div className='flex flex-wrap flex-row'>
        <button className='self-start m-3 bg-indigo-400 p-3 rounded-2xl' onClick={()=>
        {
          signUp(emailRef.current.value,userRef.current.value,mobileRef.current.value,feedbackRef.current.value,ratingRef.current.value,passwordRef.current.value,messageRef.current.value,proffesionRef.current.value)
        userRef.current.value=""
        emailRef.current.value=""
        mobileRef.current.value=""
        feedbackRef.current.value=""
        ratingRef.current.value=""
        messageRef.current.value=""
        passwordRef.current.value=""
        proffesionRef.current.value=""
        }}>{!search?"Connect":<BtnLoader/>}
          <FaConnectdevelop className={`inline-block text-teal-950 text-2xl`} style={{display:search?"none":"inline-block"}}/>
        </button>
        <button className='self-start m-3 bg-indigo-400 py-4 px-3 rounded-2xl text-xs font-bold' onClick={()=>{
          setConnected(true)
        }}>Already Connected?</button>
        </div>
      </div>
  )
}

export default ConnectPage
