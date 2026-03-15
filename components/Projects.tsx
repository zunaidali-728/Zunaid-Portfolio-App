"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa"

const projects = [

{
title:"Food Donation Android App",
description:
"Android application connecting donors with NGOs to reduce food wastage and distribute food efficiently.",
tech:["Java","Android","Firebase","MVVM"],
github:"https://github.com/zunaidali-728",
demo:"#",
image:"/foodApp.png"
},

{
title:"Portfolio Website",
description:
"Modern developer portfolio built with Next.js, Tailwind CSS, and Framer Motion animations.",
tech:["Next.js","Tailwind","Framer Motion"],
github:"https://github.com/zunaidali-728",
demo:"#",
image:"/portfolio.png"
}

]

export default function Projects(){

return(

<section
id="projects"
className="py-32 text-white relative overflow-hidden"
>

{/* floating icons */}

<motion.div
animate={{y:[0,20,0]}}
transition={{repeat:Infinity,duration:6}}
className="absolute left-12 top-20 text-blue-400 text-3xl opacity-30"
>
<FaCode/>
</motion.div>

<motion.div
animate={{y:[0,-20,0]}}
transition={{repeat:Infinity,duration:5}}
className="absolute right-12 bottom-20 text-purple-400 text-3xl opacity-30"
>
<FaCode/>
</motion.div>

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

Projects

</motion.h2>


<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

{projects.map((project,index)=>{

return(

<motion.div
key={index}

initial={{opacity:0,y:80}}
whileInView={{opacity:1,y:0}}

whileHover={{
scale:1.05,
rotateX:5,
rotateY:-5
}}

transition={{duration:0.5}}

className="group backdrop-blur-xl bg-white/5 border border-white/10
rounded-xl shadow-lg overflow-hidden
hover:shadow-[0_0_30px_rgba(255,140,0,0.4)]
transition relative"
>

{/* project image */}


<div className="h-48 overflow-hidden">
<Image
src={project.image}
alt={project.title}
width={600}
height={400}
className="w-full h-full object-cover group-hover:scale-110 transition"
/>
</div>


<div className="p-6">

<h3 className="text-xl font-semibold mb-3">
{project.title}
</h3>

<p className="text-gray-400 mb-4">
{project.description}
</p>

{/* tech stack */}

<div className="flex flex-wrap gap-2 mb-5">

{project.tech.map((tech,i)=>(

<span
key={i}
className="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full"
>

{tech}

</span>

))}

</div>

{/* buttons */}

<div className="flex gap-4">

<motion.a
href={project.github}
target="_blank"

whileHover={{scale:1.1}}

className="flex items-center gap-2 text-blue-400 font-semibold"
>

<FaGithub/>

Code

</motion.a>

</div>

</div>

</motion.div>

)

})}

</div>

</section>

)

}