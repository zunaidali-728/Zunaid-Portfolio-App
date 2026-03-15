"use client"

import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import { useCallback } from "react"

export default function ParticlesBackground(){

const particlesInit = useCallback(async (engine:any)=>{
await loadFull(engine)
},[])

return(

<Particles
id="tsparticles"
init={particlesInit}

options={{

background:{color:"transparent"},

particles:{
number:{value:60},
size:{value:2},
color:{value:"#60a5fa"},
links:{
enable:true,
color:"#60a5fa",
distance:150
},
move:{
enable:true,
speed:1
}
}

}}

className="absolute inset-0 -z-10"
/>

)
}