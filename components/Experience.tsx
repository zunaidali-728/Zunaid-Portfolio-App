"use client"

import { motion, useScroll } from "framer-motion"
import { FaBriefcase, FaAndroid } from "react-icons/fa"

const experience = [

{
title:"Software Engineer",
company:"Tata Consultancy Services",
period:"2026 – Present • Kolkata",
icon:FaBriefcase,
points:[
"Developed backend components using Core Java and multithreading.",
"Built scalable modules using JDBC and Servlets for database transactions.",
"Optimized Oracle SQL queries improving data retrieval speed.",
"Improved database performance using indexing and query tuning.",
"Integrated REST APIs and applied Spring framework basics."
]
},

{
title:"Android Developer Intern",
company:"Nagarro",
period:"Feb 2024 – Dec 2024 • Remote",
icon:FaAndroid,
points:[
"Developed Android apps using Java, XML and Material Design.",
"Implemented MVVM architecture with LiveData and ViewModel.",
"Integrated REST APIs using Retrofit and Firebase.",
"Built authentication flows and navigation features.",
"Optimized UI using RecyclerView and Room database."
]
}

]

export default function Experience(){

const { scrollYProgress } = useScroll()

return(

<section id="experience" className="py-32 text-white relative overflow-hidden">

{/* title */}

<motion.h2
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}

className="text-5xl font-bold text-center mb-24
bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400
text-transparent bg-clip-text
drop-shadow-[0_0_20px_rgba(139,92,246,0.6)]"
>
Experience

</motion.h2>


<div className="relative max-w-6xl mx-auto">


{/* animated timeline */}

<motion.div
style={{scaleY:scrollYProgress}}

className="absolute left-1/2 transform -translate-x-1/2 origin-top
w-[3px] h-full bg-gradient-to-b from-green-400 via-cyan-400 to-blue-400"
/>


{experience.map((job,index)=>{

const isLeft = index % 2 === 0
const Icon = job.icon

return(

<motion.div
key={index}

initial={{opacity:0,y:80}}
whileInView={{opacity:1,y:0}}

className={`mb-24 flex ${isLeft ? "justify-start" : "justify-end"}`}
>

{/* card */}

<motion.div
whileHover={{
scale:1.05,
rotateX:5,
rotateY:-5
}}

className="w-[45%] backdrop-blur-xl bg-white/5 border border-white/10
p-6 rounded-xl shadow-lg
hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]
transition relative group"
>

{/* glow */}

<div className="absolute inset-0 opacity-0 group-hover:opacity-100
bg-gradient-to-r from-green-500/10 via-cyan-500/10 to-blue-500/10
rounded-xl transition"></div>


<div className="flex items-center gap-3 mb-3">

<Icon className="text-cyan-400"/>

<h3 className="font-semibold text-lg">
{job.title}
</h3>

</div>

<p className="text-blue-400 text-sm mb-2">
{job.company}
</p>

<p className="text-gray-400 text-sm mb-4">
{job.period}
</p>

<ul className="space-y-2 text-gray-300 text-sm">

{job.points.map((point,i)=>(

<motion.li
key={i}
initial={{opacity:0,x:-20}}
whileInView={{opacity:1,x:0}}
transition={{delay:i*0.1}}
>

• {point}

</motion.li>

))}

</ul>

</motion.div>


{/* timeline node */}

<div className="absolute left-1/2 transform -translate-x-1/2">

<motion.div
animate={{scale:[1,1.4,1]}}
transition={{repeat:Infinity,duration:2}}

className="w-6 h-6 rounded-full
bg-cyan-400 shadow-[0_0_25px_#22d3ee]"
/>

</div>

</motion.div>

)

})}

</div>

</section>

)

}