"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const menu = [
{ name:"Home", link:"#hero" },
{ name:"About", link:"#about" },
{ name:"Experience", link:"#experience" },
{ name:"Skills", link:"#skills" },
{ name:"Projects", link:"#projects" },
{ name:"Education", link:"#education" },
{ name:"Contact", link:"#contact" }
]

export default function Navbar(){

const [active,setActive] = useState("Home")

/* detect active section while scrolling */

useEffect(()=>{

const handleScroll = () => {

const sections = menu.map(item =>
document.querySelector(item.link)
)

sections.forEach((section,index)=>{

if(!section) return

const rect = section.getBoundingClientRect()

if(rect.top <= 120 && rect.bottom >= 120){
setActive(menu[index].name)
}

})

}

window.addEventListener("scroll",handleScroll)

return ()=> window.removeEventListener("scroll",handleScroll)

},[])


return(

<motion.nav
initial={{y:-80}}
animate={{y:0}}
transition={{duration:0.5}}
className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10"
>

<div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 text-white">


{/* logo */}

<motion.h1
initial={{opacity:0, y:-20}}
animate={{opacity:1, y:0}}
transition={{duration:0.8}}

whileHover={{scale:1.08}}

onClick={()=>{
window.scrollTo({top:0,behavior:"smooth"})
}}

className="relative text-2xl font-bold 
bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 
text-transparent bg-clip-text 
drop-shadow-[0_0_12px_rgba(139,92,246,0.7)] 
cursor-pointer"
>

{"< Welcome To My Portfolio />".split("").map((letter,index)=>(

<motion.span
key={index}
initial={{opacity:0,y:10}}
animate={{opacity:1,y:0}}
transition={{delay:index*0.05}}
className="inline-block"
>

{letter}

</motion.span>

))}

</motion.h1>


{/* menu */}

<div className="flex gap-10">

{menu.map((item,index)=>(

<motion.a
key={index}
href={item.link}

onClick={()=>setActive(item.name)}

whileHover={{scale:1.15}}

className={`relative text-sm tracking-wide cursor-pointer transition-colors duration-300
${active === item.name ? "text-blue-400":"text-white"}
`}

>

{item.name}

{/* active underline */}

{active === item.name && (

<motion.span
layoutId="menuUnderline"
className="absolute left-0 -bottom-1 w-full h-[2px] 
bg-gradient-to-r from-blue-400 to-purple-400"
/>

)}

</motion.a>

))}

</div>

</div>

</motion.nav>

)
}