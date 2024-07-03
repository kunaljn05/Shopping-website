import React, { useEffect, useState } from 'react'
import light from "../assets/light.png"
import dark from "../assets/dark.png"

const Darkmode = () => {
    const [theme ,setTheme] = useState(localStorage.getItem("theme")?localStorage.getItem("theme"):"light");
    const element = document.documentElement;

    useEffect(()=>{
        if(theme === "dark"){
            element.classList.add("dark");
            localStorage.setItem("theme","dark");
        }
        else{
            element.classList.remove("dark");
            localStorage.setItem("theme","light");
        }
    },[theme]);
    
  return (
    <div className='relative'>
        <img src={light} alt='lignt-logo'
         onClick={()=>setTheme(theme ==="dark" ? "light" : "dark")}
         className={`w-[45px] drop-shadow-[1px_1px_1pxrgba(0,0,0,0.1)] cursor-pointer transition-all duration-300 absolute right-0 z-10 ${theme==="light" ? "opacity-100" : "opacity-10"}`} />

        <img src={dark} alt='lignt-logo' 
          onClick={()=>setTheme(theme ==="light" ? "dark" : "light")}
         className='w-[45px] drop-shadow-[1px_1px_1pxrgba(0,0,0,0.1)] cursor-pointer transition-all duration-300 '/>
    </div>
  )
}

export default Darkmode