"use client"

import { motion } from "framer-motion"

export default function About(){

return(

<section id="about" className="py-32 text-white">

<div className="max-w-5xl mx-auto px-6 text-center">

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

About Me

</motion.h2>


{/* animated card */}

<motion.div

initial={{opacity:0,scale:0.9}}
whileInView={{opacity:1,scale:1}}
transition={{duration:1}}

className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-10 relative overflow-hidden"

>

{/* glow effect */}

<div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-xl opacity-30"></div>


{/* animated text */}

<motion.p

initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
transition={{duration:1.2}}

className="text-lg leading-relaxed relative z-10"

>

I am a{" "}

<span className="text-blue-400 font-semibold hover:text-blue-300 transition">
Software Engineer
</span>{" "}
passionate about building scalable applications and solving real-world problems.  

My experience includes{" "}

<span className="text-purple-400 font-semibold hover:text-purple-300 transition">
Java backend development
</span>,{" "}

<span className="text-pink-400 font-semibold hover:text-pink-300 transition">
Spring Boot
</span>,{" "}

<span className="text-blue-400 font-semibold hover:text-blue-300 transition">
REST APIs
</span>, and{" "}

<span className="text-cyan-400 font-semibold hover:text-cyan-300 transition">
Android application development
</span>.  

I enjoy designing efficient systems, optimizing databases, and building modern applications that deliver real value.

</motion.p>

</motion.div>

</div>

</section>

)

}