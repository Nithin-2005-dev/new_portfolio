import { createContext, useRef, useState } from "react";
import { Bounce, toast } from "react-toastify";
import emailjs from '@emailjs/browser'
import { Form } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../components/Firebase'
emailjs.init('z-mZlwkT3QPg9Ht6o')
const AnimationStore=createContext({

})
const message=(str)=>{
  if(str==="info"){
  toast.info('Touch my skills to play with me!!!', {
    position: "top-center",
    autoClose: 2999,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
    })}
    else if(str==="connect"){
      toast.success('connection added sucessfully!!!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
        });
    }else if(str==="enter"){
      toast.warning('enter mandatory fields...', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
    });
    }else if(str==="inUse"){
      toast.error('you are already connected.Please sign in', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
        });
  }else if(str==="Firebase: Error (auth/invalid-credential)"){
    toast.error('please enter correct details', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
      });
};
}
  const signUp=(email,user,mobile,feedback,rating,password,msg)=>{
    if(email=="" || user=="" || mobile=="" || feedback=="" || rating=="" || password==""){
      message("enter")
      return
    }else{
      let error=false
    createUserWithEmailAndPassword(auth,email,password)
    .then(res=>{
      sendMail(email,user,mobile,feedback,rating,msg)
      console.log(res)})
    .catch(err=>{
      if(err.message=="Firebase: Error (auth/email-already-in-use)."){
      message("inUse")
      return
      }
    })
    }
  }
const sendMail=(email,user,mobile,feedback,rating,msg)=>{
  {
  emailjs.send('service_cdui48n','template_denuftn',{
    user,email
  })
  emailjs.send('service_cdui48n','template_ce8kq7c',{
    user,email,phone:mobile,feedback,rating
  })
  message("connect")
}
}
const signIn=(email,password)=>{
  signInWithEmailAndPassword(auth,email,password)
  .then(details=>console.log(details))
  .catch(err=>{
    message("Firebase: Error (auth/invalid-credential)")
  })
}
const Provider=({children})=>{
const [touch,setTouch]=useState(true);
const [animation,setAnimation]=useState(21);
const animationChanger=(getAni)=>{
        setAnimation(getAni)
    }
    return <AnimationStore.Provider value={{animation,animationChanger,message,touch,setTouch,sendMail,signUp,signIn}}>
        {children}
    </AnimationStore.Provider>
}
export {AnimationStore,Provider}