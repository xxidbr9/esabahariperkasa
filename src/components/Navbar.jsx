import React from 'react'
import { useState } from 'react'
import twcolor from 'tailwindcss/colors'
import Brand from '../components/svg/Brand'
import Menu from '../components/svg/Menu'

const Navbar = ({ isNavbarOpen, ...props }) => {
  const [isActive, setIsActive] = useState(isNavbarOpen || false)

  return (
    <nav className='w-full fixed z-50'>
      <div data-id="container" className="laptop:container flex mx-auto justify-between laptop:py-6 mobile:py-4 items-center mobile:px-4 laptop:px-0">
        <div data-id="brand" className='flex gap-x-4 items-center text-xl font-medium text-neutral-800'>
          <Brand fill={twcolor.neutral[800]}
            className='laptop:w-14 mobile:w-8 mobile:h-8 laptop:h-14'
          />
          <div className='flex-col laptop:flex mobile:hidden'>
            <span>
              Esa Bahari
            </span><span>
              Perkasa
            </span>
          </div>
        </div>
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
    </nav>
  )
}

export default Navbar