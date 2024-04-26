import './style.css'
import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Welcome from '../../components/Welcome';

export default function App() {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  return (
   <>
    <div
    ref={ref}
    className="w-full h-screen overflow-hidden relative grid place-items-center">
    <motion.h1 
    style={{ y: textY }}
    className="font-bold text-black text-7xl md:text-9xl relative z-40">
      LOGIN
    </motion.h1>

    <motion.div 
    className='absolute inset-0 z-0'
    style={{
      backgroundImage: 'url("/layermain.jpg")',
      backgroundPosition: 'bottom',
      backgroundSize: 'cover',
      y: backgroundY,
    }}
    />
     <div 
    className='absolute inset-0 z-10 '
    style={{
      backgroundImage: 'url("/layer3F.png")',
      backgroundPosition: 'bottom',
      backgroundSize: 'cover',
      y: backgroundY,
    }}
    /> 
      <div 
    className='absolute inset-0 z-20'
    style={{
      backgroundImage: 'url("/layer2F.png")',
      backgroundPosition: 'bottom',
      backgroundSize: 'cover',
      y: backgroundY,
    }}>
    </div> 
      <div 
    className='absolute inset-0 z-30'
    style={{
      backgroundImage: 'url("/layer1F.png")',
      backgroundPosition: 'bottom',
      backgroundSize: 'cover',
      y: backgroundY,
    }}>
    </div> 
  </div>
    <Welcome />
  </> 
  )
}
