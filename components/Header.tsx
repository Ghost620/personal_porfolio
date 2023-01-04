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
        
        <div onClick={toggleDark}>
          <button className="" type="button" title="Toggle dark and light mode" aria-label="Switch between dark and light mode (currently light mode)" aria-live="polite">
            <svg viewBox="0 0 24 24" width="24" height="24" className="mt-2">
              <path fill="currentColor" d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5 S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1 s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0 c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95 c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41 L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41 s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06 c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"></path>
            </svg>
          </button>
        </div>

        <SocialIcon className='cursor-pointer color-green' network='email' fgColor='silver' bgColor='transparent' href="#contactMe" type='link' />
        <p className='uppercase hidden md:inline-flex text-sm text-black dark:text-white'>
          Get In Touch
        </p>
      </motion.div>

    </header>
  )
}

export default Header