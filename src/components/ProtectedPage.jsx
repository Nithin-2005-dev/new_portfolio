import React, { useContext, useEffect, useState } from 'react'
import Contact from './Contact'
import AnimatePages from './AnimatePages'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase';
import ConnectedUsers from './ConnectedUsers';
import Header from './Header';
import ConnectPage from './ConnectPage';

const ProtectedPage = () => {
  const [isConnected,setUser]=useState(false);
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
        if(user){
            setUser(true);
        }else{
            setUser(false);
        }
    })
  })
  console.log(isConnected)
  return (
    <>
    {/* <Contact/> */}
     {isConnected?<ConnectedUsers/>:<Contact/>} 
    </>
  )
}

export default ProtectedPage
