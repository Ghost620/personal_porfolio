import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Skill } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  skills: Skill[]
}

const Skills = ({skills}: Props) => {

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  
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

      <motion.div className='grid grid-cols-5 gap-5 mt-20 md:mt-0' variants={container} ref={ref} initial={"hidden"} animate={controls}>

        { skills?.map((skill) => (

          <motion.div className='group relative flex cursor-pointer' variants={item} key={skill._id}>

            <motion.img
              className='rounded-full border border-green-700 object-contain h-16 w-16 md:h-28 md:w-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out bg-gray-100' src={urlFor(skill.image).url()} alt='' 
            />
  
            <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:h-28 md:w-28 xl:h-32 xl:w-32 rounded-full z-0'>
  
              <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black'> {skill.progress}% </p>
              </div>
  
            </div>
  
          </motion.div>
        )) }

      </motion.div>
        
    </motion.div>
  )
}

export default Skills
