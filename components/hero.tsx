"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import ParticlesBackground from "./ParticlesBackground"

import {
FaGithub,
FaJava,
FaAndroid
} from "react-icons/fa"

import { SiSpringboot } from "react-icons/si"

export default function Hero(){

return(

<section
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


{/* name */}

<motion.h1

initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:1}}

className="text-6xl md:text-7xl font-extrabold mb-6
bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400
text-transparent bg-clip-text
drop-shadow-[0_0_30px_rgba(139,92,246,0.9)]"

>

Md Zunaid Ali

</motion.h1>


{/* typing role */}

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


{/* buttons */}

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


<motion.a

href="https://github.com/zunaidali-728"
target="_blank"

whileHover={{scale:1.1}}

className="text-blue-400 underline text-lg"
>

View My GitHub

</motion.a>

</div>

</section>

)
}