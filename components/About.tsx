import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const About = (props: Props) => {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity:1 }} viewport={{ once: true}} transition={{ duration:1.5 }} className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        
        <h3 className='absolute top-24 uppercase tracking-[20px] text-2xl'>About</h3>

        <motion.img
            initial={{
                x:-200,
                opacity: 0
            }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once: true}}
            transition={{ duration:1.2 }}
            src='https://cdn.pixabay.com/photo/2022/12/31/18/03/motorcycle-7689120_960_720.jpg' alt=''
            className='-mb-20 md:mb-0 flex-shrink-0 w-44 h-44 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] mt-20 sm:mt-0'
        />

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-green-900'>little</span> background</h4>
            <p className=''>Hardworking undergraduate Student seeking experience in AI and Machine Learning. Committed to utilizing my skills to further the mission of a company. Bilingual, hardworking and ready to join my next team.</p>
        </div>

    </motion.div>
  )
}

export default About