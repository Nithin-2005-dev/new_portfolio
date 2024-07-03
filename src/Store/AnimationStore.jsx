import { createContext, useRef, useState } from "react";
import { Bounce, toast } from "react-toastify";
import emailjs from '@emailjs/browser'
import { Form } from "react-router-dom";
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
    }
  };
const sendMail=(email,user,mobile,feedback,rating)=>{
  if(email=="" || user=="" || mobile==""){
    message("enter")
    return
  }else{
  emailjs.send('service_cdui48n','template_denuftn',{
    user,email
  })
  emailjs.send('service_cdui48n','template_ce8kq7c',{
    user,email,phone:mobile,feedback,rating
  })
  message("connect")
}
}
const Provider=({children})=>{
const [touch,setTouch]=useState(false);
  const [animation,setAnimation]=useState(21);
    const animationChanger=(getAni)=>{
        setAnimation(getAni)
    }
    return <AnimationStore.Provider value={{animation,animationChanger,message,touch,setTouch,sendMail}}>
        {children}
    </AnimationStore.Provider>
}
export {AnimationStore,Provider}