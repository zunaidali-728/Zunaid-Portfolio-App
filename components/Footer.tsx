"use client"

import { motion, useScroll } from "framer-motion"
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa"
import { useEffect, useState } from "react"

export default function Footer(){

const { scrollYProgress } = useScroll()

const [show,setShow] = useState(false)

useEffect(()=>{

const handleScroll = ()=>{
if(window.scrollY > 400){
setShow(true)
}else{
setShow(false)
}
}

window.addEventListener("scroll",handleScroll)

return ()=>window.removeEventListener("scroll",handleScroll)

},[])

const scrollTop = ()=>{
window.scrollTo({
top:0,
behavior:"smooth"
})
}

return(

<footer className="relative py-16 text-white text-center overflow-hidden">

{/* scroll progress bar */}

<motion.div
style={{scaleX:scrollYProgress}}
className="fixed top-0 left-0 right-0 h-[3px] origin-left bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 z-50"
/>

{/* glowing wave background */}

<div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,#3b82f6,transparent_60%)]"></div>


{/* divider */}

<motion.div
initial={{scaleX:0}}
whileInView={{scaleX:1}}
transition={{duration:0.8}}
className="w-40 h-[2px] mx-auto mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
/>


{/* copyright */}

<motion.p
initial={{opacity:0,y:20}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
className="text-sm text-gray-400"
>

© {new Date().getFullYear()} 

<span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text font-semibold">
  Md Zunaid Ali
</span>

. All Rights Reserved.

</motion.p>


{/* back to top button */}

{show && (

<motion.button
onClick={scrollTop}
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
whileHover={{scale:1.2}}
className="fixed bottom-8 right-8 bg-blue-600 p-4 rounded-full shadow-lg"
>

<FaArrowUp/>

</motion.button>

)}

</footer>

)

}