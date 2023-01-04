import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const Skills = (props: Props) => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delayChildren: 0.5, staggerChildren: 0.2}
    }
  }
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity:1}}
    transition={{duration: 1.5}}
    className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>

      <h3 className='absolute top-24 uppercase tracking-[20px] text-2xl'>Skills</h3>

      <h3 className='absolute top-36 uppercase tracking-[3px] text-sm'> Hover over a skill for currency proficiency </h3>

      <motion.div className='grid grid-cols-4 gap-5' variants={container} initial={"hidden"} animate={"visible"}>

        <motion.div className='group relative flex cursor-pointer' variants={item}>

          <motion.img
            className='rounded-full border border-green-700 object-contain h-16 w-16 md:h-28 md:w-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out bg-gray-100'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' alt='' 
          />

          <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:h-28 md:w-28 xl:h-32 xl:w-32 rounded-full z-0'>

            <div className='flex items-center justify-center h-full'>
              <p className='text-3xl font-bold text-black'>75%</p>
            </div>

          </div>

        </motion.div>

        <motion.div className='group relative flex cursor-pointer' variants={item}>

          <motion.img
            className='rounded-full border border-green-700 object-contain h-16 w-16 md:h-28 md:w-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out bg-gray-100 dark:bg-gray-300'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png' alt='' 
          />

          <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:h-28 md:w-28 xl:h-32 xl:w-32 rounded-full z-0'>

            <div className='flex items-center justify-center h-full'>
              <p className='text-3xl font-bold text-black'>85%</p>
            </div>

          </div>

        </motion.div>

      </motion.div>
        
    </motion.div>
  )
}

export default Skills