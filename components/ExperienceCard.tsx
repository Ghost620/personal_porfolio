import React from 'react'
import { motion } from 'framer-motion'
import { Experience } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  experience: Experience;
}

const ExperienceCard = ({experience}: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[340px] md:w-[650px] xl:w-[875px] snap-center bg-teal-700 dark:bg-slate-800 text-slate-100 p-10 opacity-90 hover:opacity-100 dark:opacity-70 dark:hover:opacity-100 transition-opacity duration-200 overflow-hidden h-[400px] md:h-fit'>

        <motion.img initial={{ y: -100, opacity: 0 }} transition={{ duration: 1.2 }} whileInView={{ opacity: 1, y:0 }} viewport={{once: true}}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-contain' src={urlFor(experience?.companyImage).url()} alt='' />

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'> {experience.jobTitle} </h4>
            <p className='font-bold text-2xl mt-1'> {experience.company} </p>
            <div className='flex space-x-2 my-2'>
              {experience.technologies.map((technology) => (
                <img key={technology._id} className='h-8 w-16 rounded-full' src={urlFor(technology.image).url()} alt='' />
              ))}

            </div>
            <p className='uppercase py-5'> { new Date(experience.dateStarted).toDateString() } -{" "}{!experience.dateEnded ? "Present" : new Date(experience.dateEnded).toDateString() } </p>

            <ul className='list-disc space-y-4 mt-5 text-lg hidden md:grid'>
              { experience.points.map((point, ind) => (
                <li key={ind}> { point } </li>
              )) }
            </ul>
        </div>
        
    </article>
  )
}

export default ExperienceCard