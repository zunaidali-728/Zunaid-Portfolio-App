"use client"

import { motion } from "framer-motion"

export default function SectionDivider(){

return(

<motion.div
initial={{opacity:0,scaleX:0}}
whileInView={{opacity:1,scaleX:1}}
transition={{duration:0.8}}
className="w-40 h-[2px] mx-auto my-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
/>

)

}