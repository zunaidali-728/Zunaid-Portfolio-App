"use client"

import { motion } from "framer-motion"
import {
FaEnvelope,
FaPhone,
FaGithub,
FaLinkedin
} from "react-icons/fa"

const contacts = [

{
icon:FaEnvelope,
text:"md.zunaid.ali@gmail.com",
link:"mailto:md.zunaid.ali@gmail.com"
},

{
icon:FaPhone,
text:"+91 8252300728",
link:"tel:+918252300728"
},

{
icon:FaGithub,
text:"GitHub",
link:"https://github.com/zunaidali-728"
},

{
icon:FaLinkedin,
text:"LinkedIn",
link:"https://www.linkedin.com/in/md-zunaid-ali-315bb8229"

}

]

export default function Contact(){

return(

<section
id="contact"
className="py-32 text-white text-center relative"
>

{/* animated title */}

<motion.h2
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
className="text-5xl font-bold mb-20
bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400
text-transparent bg-clip-text
drop-shadow-[0_0_20px_rgba(139,92,246,0.6)]"
>

Contact Me

</motion.h2>


{/* contact cards */}

<div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

{contacts.map((item,index)=>{

const Icon = item.icon

return(

<motion.a
key={index}
href={item.link}
target="_blank"

initial={{opacity:0,y:50}}
whileInView={{opacity:1,y:0}}

whileHover={{
scale:1.05,
rotateX:5,
rotateY:-5
}}

transition={{delay:index*0.1}}

className="group relative backdrop-blur-xl bg-white/5 border border-white/10
p-6 rounded-xl flex items-center gap-4
hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]
transition"
>

{/* hover glow */}

<div className="absolute inset-0 opacity-0 group-hover:opacity-100
bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10
rounded-xl transition"></div>


<Icon className="text-2xl text-blue-400"/>

<p className="text-gray-300 relative z-10">
{item.text}
</p>

</motion.a>

)

})}

</div>


{/* message form */}

<motion.div
initial={{opacity:0,y:80}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
className="mt-20 max-w-3xl mx-auto backdrop-blur-xl bg-white/5 border border-white/10 p-10 rounded-xl shadow-xl"
>

<h3 className="text-2xl font-semibold mb-8 text-blue-400">
Send a Message
</h3>

<form className="flex flex-col gap-5">

<input
type="text"
placeholder="Your Name"
className="bg-black/40 border border-gray-700 rounded-lg p-4 focus:outline-none focus:border-blue-400 transition"
/>

<input
type="email"
placeholder="Your Email"
className="bg-black/40 border border-gray-700 rounded-lg p-4 focus:outline-none focus:border-purple-400 transition"
/>

<textarea
placeholder="Your Message"
rows={4}
className="bg-black/40 border border-gray-700 rounded-lg p-4 focus:outline-none focus:border-pink-400 transition"
/>

<motion.button
whileHover={{
scale:1.05,
boxShadow:"0px 0px 20px rgba(59,130,246,0.6)"
}}
whileTap={{scale:0.95}}

className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
py-4 rounded-lg font-semibold"
>

Send Message

</motion.button>

</form>

</motion.div>

</section>

)

}