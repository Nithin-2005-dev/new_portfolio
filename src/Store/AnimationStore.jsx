import { createContext, useState } from "react";
import { Bounce, toast } from "react-toastify";

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
    else if(str==="welcome"){

    }
  };
const Provider=({children})=>{
const [touch,setTouch]=useState(false);
  const [animation,setAnimation]=useState(21);
    const animationChanger=(getAni)=>{
        setAnimation(getAni)
    }
    return <AnimationStore.Provider value={{animation,animationChanger,message,touch,setTouch}}>
        {children}
    </AnimationStore.Provider>
}
export {AnimationStore,Provider}