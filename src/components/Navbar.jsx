import React from 'react'
import { useState } from 'react'
import { useWindowScroll } from 'react-use'
import twcolor from 'tailwindcss/colors'
import Brand from '../components/svg/Brand'
import Menu from '../components/svg/Menu'
import BrandComp from './BrandComp'
import { motion } from 'framer-motion'
const Navbar = ({ isNavbarOpen, ...props }) => {
  const [isActive, setIsActive] = useState(isNavbarOpen || false)
  const { y } = useWindowScroll()
  return (
    <motion.nav className={`w-full fixed z-50 transition-all duration-150 ${y > 0 ? "bg-white shadow-lg" : ""}`} >
      <div data-id="container" className="laptop:container flex mx-auto justify-between laptop:py-6 mobile:py-4 items-center mobile:px-4 laptop:px-0">
        <BrandComp />
        <div data-id="menu" className='text-xl font-medium flex items-center gap-x-10'>
          <ul className='laptop:flex items-center gap-x-10 mobile:hidden'>
            <li><a href="/services">Services</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact" className='px-6 py-3 bg-neutral-800 rounded-full text-white'>Contact</a></li>
          </ul>
          <button className='cursor-pointer flex justify-center items-center' onClick={() => setIsActive(!isActive)}>
            <Menu fill={twcolor.neutral[800]} className="mobile:w-8 " active={isActive} />
          </button>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar