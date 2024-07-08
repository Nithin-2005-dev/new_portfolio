import { createContext, useCallback, useEffect, useRef, useState } from "react";
import { Bounce, toast } from "react-toastify";
import emailjs from '@emailjs/browser'
import { Form } from "react-router-dom";
import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
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
}else if(str=="notVerified"){
  toast.error('please verify your email', {
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
}
const Provider=({children})=>{
  const [isConnected,setUser]=useState(false);
  const [userDetails,setUserDetails]=useState({})
const [touch,setTouch]=useState(true);
const [animation,setAnimation]=useState(21);
const [search,setSearch]=useState(false)
useEffect(()=>{
  onAuthStateChanged(auth,(user)=>{
    if(user){
      setUserDetails(user);
      setUser(true);

    }else{
        setUser(false);
    }
  })
},[auth])
const signUp=async(email,user,mobile,feedback,rating,password,msg,proffesion)=>{
  if(email=="" || user=="" || mobile=="" || feedback=="" || rating=="" || password==""){
    message("enter")
    return
  }else{
    setSearch(true)
  await createUserWithEmailAndPassword(auth,email,password)
  .then(res=>{
    sendMail(email,user,mobile,feedback,rating,msg,proffesion)
    })
  .catch(err=>{
    if(err.message=="Firebase: Error (auth/email-already-in-use)."){
    message("inUse")
    }else{
      message("Firebase: Error (auth/invalid-credential)")
    }
    return
  })
  await sendEmailVerification(auth.currentUser)
  .catch((err)=>console.log(err));
  await updateProfile(auth.currentUser,{displayName:user})
  .then(res=>console.log(res))
  .catch(err=>console.log(err))
  setSearch(false)
  }
}
const sendMail=useCallback((email,user,mobile,feedback,rating,msg,proffesion)=>{
console.log("entered")
emailjs.send('service_ggz6yd9','template_denuftn',{
  user,email
})
.catch(err=>console.log(err))
emailjs.send('service_ggz6yd9','template_ce8kq7c',{
  user,email,phone:mobile,feedback,rating,message:msg,proffesion
})
.catch(err=>{console.log(err)})
message("connect")
message("notVerified")
},[signUp])
const signIn=async(email,password)=>{
  if(email=="" || password==""){
    message("enter");
  }else{
 setSearch(true)
await signInWithEmailAndPassword(auth,email,password)
.catch(err=>{
  message("Firebase: Error (auth/invalid-credential)")
})
setSearch(false)
  }
}
const [roboOn,setRobo]=useState(false)
const [position,setPosition]=useState("front")
const animationChanger=(getAni)=>{
        setAnimation(getAni)
    }
    return <AnimationStore.Provider value={{animation,animationChanger,message,touch,setTouch,sendMail,signUp,signIn,search,roboOn,setRobo,position,setPosition,isConnected,userDetails}}>
        {children}
    </AnimationStore.Provider>
}
export {AnimationStore,Provider}