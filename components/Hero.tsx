import React from 'react'
import Link from 'next/link'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import { PageInfo } from '../typings'
import { urlFor } from '../sanity'

type Props = {
  pageInfo: PageInfo
}

const Hero = ({ pageInfo }: Props) => {

    const [text, count] = useTypewriter({
        words: ["Welcome", `The Name's ${pageInfo?.name}`],
        loop: true,
        delaySpeed: 2000,
    })

  return (
    <div className='h-screen flex flex-col items-center last:space-y-0.25 justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <img className='relative rounded-full h-32 sm:h-64 w-32 sm:w-64 mx-auto object-cover mt-10 sm:mt-6' src={urlFor(pageInfo?.heroImage).url()} alt='' />

        <div className='z-20'>
          <h2 className='text-sm uppercase py-2 tracking-[15px]'> {pageInfo?.role} </h2>

          <h1 className='text-5xl font-semibold px-10 mt-20 sm:mt-0'>
              <span className='mr-3'> {text} </span>
              <Cursor cursorColor='dark-green' />
          </h1>

          <div className='pt-5'>
            <Link href="#about"> <button className='heroButton'> About </button> </Link>
            <Link href="#experience"> <button className='heroButton'> Experience </button> </Link>
            <Link href="#skills"> <button className='heroButton'> Skills </button> </Link>
            <Link href="#projects"> <button className='heroButton'> Projects </button> </Link>
          </div>

        </div>
    </div>
  )
}

export default Hero