"use client"

import { motion } from "framer-motion"
import {
FaJava,
FaPython,
FaAndroid,
FaGithub,
FaDocker
} from "react-icons/fa"

import {
SiSpringboot,
SiFirebase,
SiMysql,
SiPostman
} from "react-icons/si"

import { FaDatabase } from "react-icons/fa"

const skills = {

Languages:[
{ name:"Java", icon:FaJava },
{ name:"Python", icon:FaPython },
{ name:"PL/SQL", icon:FaDatabase }
],

Backend:[
{ name:"Spring", icon:SiSpringboot },
{ name:"Spring Boot", icon:SiSpringboot },
{ name:"REST APIs", icon:FaDatabase },
{ name:"JDBC", icon:FaDatabase }
],

Mobile:[
{ name:"Android Development", icon:FaAndroid },
{ name:"MVVM Architecture", icon:FaDatabase }
],

Database:[
{ name:"Oracle SQL", icon:FaDatabase },
{ name:"Firebase", icon:SiFirebase },
{ name:"MySQL", icon:SiMysql }
],

Tools:[
{ name:"GitHub", icon:FaGithub },
{ name:"Docker", icon:FaDocker },
{ name:"Postman", icon:SiPostman }
]

}

export default function Skills(){

return(

<section id="skills" className="py-32 text-white relative overflow-hidden">

{/* animated title */}

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


<div className="max-w-6xl mx-auto space-y-20">

{Object.entries(skills).map(([category,list],index)=>(

<div key={index}>

<h3 className="text-center text-blue-400 text-lg font-semibold mb-8">
{category}
</h3>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

{list.map((skill,i)=>{

const Icon = skill.icon

return(

<motion.div
key={i}

initial={{opacity:0,y:60}}
whileInView={{opacity:1,y:0}}

whileHover={{
scale:1.08,
rotateX:8,
rotateY:-8
}}

transition={{duration:0.4}}

className="group backdrop-blur-xl bg-white/5 border border-white/10
p-6 rounded-xl flex flex-col items-center justify-center
hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]
transition relative"
>

{/* hover glow */}

<div className="absolute inset-0 opacity-0 group-hover:opacity-100
bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10
rounded-xl transition"></div>

<motion.div
whileHover={{y:-5}}
className="text-3xl text-blue-400 mb-2"
>

<Icon/>

</motion.div>

<p className="text-gray-300 text-sm">
{skill.name}
</p>

</motion.div>

)

})}

</div>

</div>

))}

</div>

</section>

)
}