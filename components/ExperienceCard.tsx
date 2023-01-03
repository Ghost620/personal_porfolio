import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const ExperienceCard = (props: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px]'>
        <motion.img initial={{ y: -100, opacity: 0 }} transition={{ duration: 1.2 }} whileInView={{ opacity: 1, y:0 }} viewport={{once: true}}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center' src='' alt='' />

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>DATA EXTRACTOR</h4>
            <p className='font-bold text-2xl mt-1'>Profecia Links</p>
            <div className='flex space-x-2 my-2'>
                <img className='h-10 w-10 rounded-full' src='https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png' alt='' />
                <img className='h-10 w-10 rounded-full' src='https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png' alt='' />
                <img className='h-10 w-10 rounded-full' src='https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png' alt='' />
            </div>
            <p className='uppercase py-5'>05/2022 - 08/2022</p>

            <ul className='list-disc space-y-4 mt-5 text-lg'>
                <li>Summary</li>
                <li>A</li>
                <li>B</li>
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard