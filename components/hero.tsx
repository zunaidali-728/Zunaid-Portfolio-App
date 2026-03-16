"use client"

import Image from "next/image"
import { motion, useMotionValue, useTransform } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import ParticlesBackground from "./ParticlesBackground"

import {
FaGithub,
FaJava,
FaAndroid
} from "react-icons/fa"

import { SiSpringboot } from "react-icons/si"


export default function Hero(){

/* mouse parallax */

const x = useMotionValue(0)
const y = useMotionValue(0)

const rotateX = useTransform(y, [-100,100], [10,-10])
const rotateY = useTransform(x, [-100,100], [-10,10])

function handleMouseMove(e:any){

const rect = e.currentTarget.getBoundingClientRect()

const mouseX = e.clientX - rect.left - rect.width/2
const mouseY = e.clientY - rect.top - rect.height/2

x.set(mouseX)
y.set(mouseY)

}

return(

<section
id="hero"
className="min-h-screen flex flex-col items-center justify-center text-center text-white relative overflow-hidden"
>

<ParticlesBackground/>

{/* floating icons */}

<motion.div
animate={{y:[0,20,0],rotate:[0,10,0]}}
transition={{repeat:Infinity,duration:6}}
className="absolute top-24 left-20 text-blue-400 text-3xl opacity-40"
>
<FaJava/>
</motion.div>

<motion.div
animate={{y:[0,-20,0]}}
transition={{repeat:Infinity,duration:5}}
className="absolute top-40 right-24 text-purple-400 text-3xl opacity-40"
>
<SiSpringboot/>
</motion.div>

<motion.div
animate={{y:[0,20,0]}}
transition={{repeat:Infinity,duration:7}}
className="absolute bottom-32 left-28 text-cyan-400 text-3xl opacity-40"
>
<FaAndroid/>
</motion.div>

<motion.div
animate={{y:[0,-20,0]}}
transition={{repeat:Infinity,duration:6}}
className="absolute bottom-40 right-20 text-blue-400 text-3xl opacity-40"
>
<FaGithub/>
</motion.div>


{/* PROFILE IMAGE */}

<motion.div

onMouseMove={handleMouseMove}

style={{
rotateX,
rotateY
}}

initial={{ scale:0, opacity:0 }}
animate={{ scale:1, opacity:1 }}

transition={{ duration:1 }}

className="flex justify-center mb-10 perspective-1000"

>

<motion.div

animate={{ y:[0,-15,0] }}
transition={{ duration:4, repeat:Infinity }}

className="relative"

>

{/* rotating ring */}

<motion.div

className="absolute inset-0 rounded-full border border-blue-400"

animate={{ rotate:360 }}

transition={{
duration:12,
repeat:Infinity,
ease:"linear"
}}

/>

{/* glow aura */}

<div className="absolute inset-0 rounded-full bg-blue-500 blur-3xl opacity-40 animate-pulse"></div>


<Image
src="/profile.png"
alt="Zunaid"
width={190}
height={190}
className="rounded-full border-4 border-blue-500 shadow-[0_0_60px_rgba(59,130,246,0.7)]"
/>

</motion.div>

</motion.div>


{/* NAME */}

<motion.h1

initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:1}}

className="text-5xl md:text-7xl font-extrabold mb-6
bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400
text-transparent bg-clip-text
drop-shadow-[0_0_30px_rgba(139,92,246,0.9)]"

>

Md Zunaid Ali

</motion.h1>


{/* TYPING ROLE */}

<TypeAnimation

sequence={[
"Software Engineer",
2000,
"Java Backend Developer",
2000,
"Android Developer",
2000
]}

wrapper="span"
speed={50}
repeat={Infinity}

className="text-xl text-gray-300 mb-10 block"
/>


{/* BUTTON */}

<div className="flex flex-col md:flex-row gap-6 items-center">

<motion.a

href="/ZunaidAli_updatedResume.pdf"
download

whileHover={{
scale:1.1,
boxShadow:"0px 0px 25px rgba(59,130,246,0.8)"
}}

whileTap={{scale:0.95}}

className="bg-gradient-to-r from-blue-500 to-purple-500
px-8 py-4 rounded-xl font-semibold"

>

Download Resume

</motion.a>

</div>

</section>

)
}