import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

type Props = {}

const Header = (props: Props) => {

  const toggleDark = () => {
    document.body.classList.toggle('dark')
  }

  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      <motion.div initial={{ x: -500, opacity: 0, scale: 0.5 }} animate={{ x: 0, opacity: 1, scale: 1 }} transition={{ duration:1.5 }} className='flex flex-row items-center'>

        <SocialIcon url="https://github.com/Ghost620" fgColor='silver' bgColor='transparent' />
        <SocialIcon url="https://www.facebook.com/profile.php?id=100016574462614" fgColor='silver' bgColor='transparent' />
        <SocialIcon url="https://www.instagram.com/muhammadhuzaifasiddiq/" fgColor='silver' bgColor='transparent' />
        <SocialIcon url="https://twitter.com/FAGhost3" fgColor='silver' bgColor='transparent' />
        
      </motion.div>

      <motion.div initial={{ x: 500, opacity: 0, scale: 0.5 }} animate={{ x: 0, opacity: 1, scale: 1 }} transition={{ duration:1.5 }} className='flex flex-row items-center text-gray-300 cursor-pointer'>
        <SocialIcon className='cursor-pointer color-green' onClick={toggleDark} network='email' fgColor='silver' bgColor='transparent' />
        <p className='uppercase hidden md:inline-flex text-sm text-black dark:text-white'>
          Get In Touch
        </p>
      </motion.div>

    </header>
  )
}

export default Header