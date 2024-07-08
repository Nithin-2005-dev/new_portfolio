import React, { useContext, useEffect, useState } from 'react'
import Contact from './Contact'
import AnimatePages from './AnimatePages'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase';
import ConnectedUsers from './ConnectedUsers';
import Header from './Header';
import ConnectPage from './ConnectPage';
import { AnimationStore } from '../Store/AnimationStore';

const ProtectedPage = () => {
  const {message,isConnected,userDetails}=useContext(AnimationStore);
  useEffect(()=>{
    if(isConnected && !userDetails.emailVerified){
      message("notVerified")
    }
  },[auth])
  return (
    <>
    {/* <Contact/> */}
     {(isConnected && userDetails.emailVerified)?<ConnectedUsers key={"forUsers"}/>:<Contact key={"forNotUsers"}/>} 
    </>
  )
}

export default ProtectedPage
