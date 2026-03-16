"use client"

import { motion } from "framer-motion"
import { FaJava, FaAndroid, FaGithub } from "react-icons/fa"
import { SiSpringboot, SiMysql, SiFirebase, SiDocker, SiPostman, SiPython } from "react-icons/si"
import { TbApi } from "react-icons/tb"

const skills = [
{ name:"Java", icon:<FaJava/> },
{ name:"Python", icon:<SiPython/> },
{ name:"PL/SQL", icon:<TbApi/> },

{ name:"Spring", icon:<SiSpringboot/> },
{ name:"Spring Boot", icon:<SiSpringboot/> },
{ name:"REST APIs", icon:<TbApi/> },
{ name:"JDBC", icon:<TbApi/> },

{ name:"Android", icon:<FaAndroid/> },
{ name:"MVVM", icon:<TbApi/> },

{ name:"Oracle SQL", icon:<TbApi/> },
{ name:"Firebase", icon:<SiFirebase/> },
{ name:"MySQL", icon:<SiMysql/> },

{ name:"GitHub", icon:<FaGithub/> },
{ name:"Docker", icon:<SiDocker/> },
{ name:"Postman", icon:<SiPostman/> }
]

const container = {
hidden: {},
show: {
transition: {
staggerChildren: 0.1
}
}
}

const cardAnimation = {
hidden: { opacity:0, y:40 },
show: { opacity:1, y:0 }
}

export default function Skills(){

return(

<section id="skills" className="py-32 text-white relative">

<div className="max-w-6xl mx-auto px-6">

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

Technical Skills

</motion.h2>


{/* grid */}

<motion.div
variants={container}
initial="hidden"
whileInView="show"
viewport={{ once:true }}
className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10"
>

{skills.map((skill,i)=>(

<motion.div

key={i}
variants={cardAnimation}

whileHover={{
scale:1.15,
rotateY:10,
rotateX:5,
boxShadow:"0px 0px 30px rgba(139,92,246,0.9)"
}}

transition={{duration:0.3}}

className="relative group p-6 rounded-xl
bg-white/5 backdrop-blur-xl
border border-white/10
text-center cursor-pointer overflow-hidden"

>

{/* animated glow */}

<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500
bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 blur-xl"></div>


{/* icon */}

<motion.div

animate={{
y:[0,-8,0],
rotate:[0,10,0]
}}

transition={{
duration:3,
repeat:Infinity
}}

className="text-4xl mb-3 text-blue-400 flex justify-center"

>

{skill.icon}

</motion.div>


{/* name */}

<p className="text-sm tracking-wide font-medium">

{skill.name}

</p>

</motion.div>

))}

</motion.div>

</div>

</section>

)

}