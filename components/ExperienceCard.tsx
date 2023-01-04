import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const ExperienceCard = (props: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[340px] md:w-[650px] xl:w-[875px] snap-center bg-teal-700 dark:bg-slate-800 text-slate-100 p-10 opacity-90 hover:opacity-100 dark:opacity-70 dark:hover:opacity-100 transition-opacity duration-200 overflow-hidden h-[400px] md:h-fit'>

        <motion.img initial={{ y: -100, opacity: 0 }} transition={{ duration: 1.2 }} whileInView={{ opacity: 1, y:0 }} viewport={{once: true}}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-contain' src='https://www.profecialinks.com/img/logo-f.png' alt='' />

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>DATA EXTRACTOR</h4>
            <p className='font-bold text-2xl mt-1'>Profecia Links</p>
            <div className='flex space-x-2 my-2'>
                <img className='h-8 w-16 rounded-full' src='https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png' alt='' />
                <img className='h-8 w-16 rounded-full' src='https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png' alt='' />
                <img className='h-8 w-16 rounded-full' src='https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png' alt='' />
            </div>
            <p className='uppercase py-5'>05/2022 - 08/2022</p>

            <ul className='list-disc space-y-4 mt-5 text-lg hidden md:grid'>
                <li>Summary</li>
                <li>A</li>
                <li>B</li>
            </ul>
        </div>
        
    </article>
  )
}

export default ExperienceCard