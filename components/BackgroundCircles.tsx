import React from 'react'
import { motion } from "framer-motion"

type Props = {}

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        animate={{ 
            scale: [1,2,2,3,1],
            opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
            borderRadius: ["20%", "20%", "50%", "80%", "20%"]
        }}
        transition={{ duration: 2.5 }}  
        className='relative flex justify-center items-center'>

        <div className='absolute border border-emerald-600 rounded-full h-[170px] sm:h-[300px] w-[170px] sm:w-[300px] mt-60 sm:mt-80 animate-ping dark:opacity-50' />
        <div className='absolute border border-emerald-300 rounded-full sm:h-[380px] sm:w-[380px] mt-60 sm:mt-80 opacity-110 dark:opacity-30' />
        <div className='absolute border border-emerald-200 rounded-full h-[265px] sm:h-[500px] w-[265px] sm:w-[500px] mt-60 sm:mt-80 opacity:100 dark:opacity-25' />
        <div className='absolute border border-emerald-600 rounded-full h-[330px] sm:h-[650px] w-[330px] sm:w-[650px] mt-60 sm:mt-80 animate-pulse opacity-40 dark:opacity-20' />
        <div className='absolute border border-emerald-200 rounded-full lg:h-[800px] lg:w-[800px] mt-60 sm:mt-80 opacity-35 dark:opacity-10' />

    </motion.div>
  )
}

export default BackgroundCircles