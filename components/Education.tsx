"use client"

import { motion, useScroll } from "framer-motion"
import { FaGraduationCap } from "react-icons/fa"

const education = [

{
school:"Institute of Engineering and Management, Kolkata",
degree:"B.Tech Computer Science & Engineering",
year:"2021 – 2025",
score:"DGPA: 8.58"
},

{
school:"Guru Gobind Singh Public School",
degree:"Higher Secondary",
year:"2019",
score:"Percentage: 90%"
},

{
school:"DAV Public School",
degree:"Secondary Education",
year:"2017",
score:"CGPA: 9.8"
}

]

export default function Education(){

const { scrollYProgress } = useScroll()

return(

<section
id="education"
className="py-32 text-white relative overflow-hidden"
>

{/* floating icons */}

<motion.div
animate={{y:[0,20,0]}}
transition={{repeat:Infinity,duration:6}}
className="absolute left-10 top-20 text-blue-400 text-3xl opacity-30"
>
<FaGraduationCap/>
</motion.div>

<motion.div
animate={{y:[0,-20,0]}}
transition={{repeat:Infinity,duration:5}}
className="absolute right-16 bottom-20 text-purple-400 text-3xl opacity-30"
>
<FaGraduationCap/>
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

Education

</motion.h2>


<div className="relative max-w-6xl mx-auto">


{/* animated scroll timeline */}

<motion.div
style={{scaleY:scrollYProgress}}
className="absolute left-1/2 transform -translate-x-1/2 origin-top
w-[3px] h-full bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400"
/>


{education.map((item,index)=>{

const isLeft = index % 2 === 0

return(

<motion.div
key={index}

initial={{opacity:0,y:80}}
whileInView={{opacity:1,y:0}}

transition={{duration:0.6}}

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
hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]
transition relative group"
>

{/* hover glow */}

<div className="absolute inset-0 opacity-0 group-hover:opacity-100
bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10
rounded-xl transition"></div>


<div className="flex items-center gap-3 mb-3">

<FaGraduationCap className="text-blue-400"/>

<h3 className="font-semibold text-lg">
{item.school}
</h3>

</div>

<p className="text-gray-400">
{item.degree}
</p>

<p className="text-gray-500 text-sm">
{item.year}
</p>

<p className="text-blue-400 mt-2">
{item.score}
</p>

</motion.div>


{/* glowing node */}

<div className="absolute left-1/2 transform -translate-x-1/2">

<motion.div
animate={{scale:[1,1.4,1]}}
transition={{repeat:Infinity,duration:2}}

className="w-6 h-6 rounded-full
bg-blue-500 shadow-[0_0_25px_#3b82f6]"
/>

</div>

</motion.div>

)

})}

</div>

</section>

)
}