"use client"

import { motion } from "framer-motion"
import { FaCode, FaLaptopCode } from "react-icons/fa"

export default function About(){

return(

<section id="about" className="py-32 text-white relative overflow-hidden">


{/* floating icons */}

<motion.div
animate={{y:[0,20,0]}}
transition={{repeat:Infinity,duration:6}}
className="absolute left-10 top-20 text-blue-400 text-3xl opacity-30"
>
<FaCode/>
</motion.div>

<motion.div
animate={{y:[0,-20,0]}}
transition={{repeat:Infinity,duration:5}}
className="absolute right-10 bottom-20 text-purple-400 text-3xl opacity-30"
>
<FaLaptopCode/>
</motion.div>


{/* section title */}

<motion.h2
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}

className="text-5xl font-bold text-center mb-24
bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400
text-transparent bg-clip-text
drop-shadow-[0_0_20px_rgba(139,92,246,0.6)]"
>

About Me

</motion.h2>


{/* about card */}

<motion.div
initial={{opacity:0,y:60}}
whileInView={{opacity:1,y:0}}

whileHover={{scale:1.03}}

className="max-w-4xl mx-auto backdrop-blur-xl bg-white/5
border border-white/10 p-10 rounded-xl
shadow-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]
transition text-center"
>

<p className="text-lg leading-relaxed text-gray-300">

I am a <span className="text-blue-400 font-semibold">Software Engineer</span> passionate about building scalable applications and solving real-world problems.

My experience includes <span className="text-purple-400 font-semibold">Java backend development</span>, <span className="text-pink-400 font-semibold">Spring Boot</span>, <span className="text-blue-400 font-semibold">REST APIs</span>, and <span className="text-cyan-400 font-semibold">Android application development</span>.

I enjoy designing efficient systems, optimizing databases, and building modern applications that deliver real value.

</p>

</motion.div>

</section>

)
}