import { createContext, useState } from "react";

const AnimationStore=createContext({

})
const Provider=({children})=>{
  const [animation,setAnimation]=useState(21);
    const animationChanger=(getAni)=>{
        setAnimation(getAni)
    }
    return <AnimationStore.Provider value={{animation,animationChanger}}>
        {children}
    </AnimationStore.Provider>
}
export {AnimationStore,Provider}