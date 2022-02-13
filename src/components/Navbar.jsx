import React from 'react'
import { useState } from 'react'
import { useWindowScroll } from 'react-use'
import twcolor from 'tailwindcss/colors'
import Menu from '../components/svg/Menu'
import BrandComp from './BrandComp'
import { motion } from 'framer-motion'
import { useCallback } from 'react'
const Navbar = ({ isNavbarOpen, ...props }) => {
  const [isActive, setIsActive] = useState(isNavbarOpen || false)
  const [isTransition, setIsTransition] = useState(false)

  const { y } = useWindowScroll()

  const _handleToggle = useCallback(() => {
    if (isActive) {
      window.document.body.classList.remove("overflow-hidden")
    } else {
      window.document.body.classList.add("overflow-hidden")
    }
    setIsActive(!isActive)
  }, [isActive])

  const _handleGoto = (e, href) => {
    e.preventDefault();
    href = href || e.target.href
    setIsTransition(true)
    setTimeout(() => {
      setIsTransition(false)
      window.location.href = href
    }, 1000)
  }

  return (
    <React.Fragment>
      <OverlayChange isAnimate={isTransition} />
      <nav className={`w-full fixed z-50 transition-all duration-150 ${y > 0 ? "bg-white shadow-lg" : ""}`} style={{
        zIndex: y > 0 ? 99999 : 50
      }}>
        <motion.div
          className={`absolute w-full bg-white`}
          initial={{
            height: 0
          }}
          animate={{
            height: isActive ? "100vh" : 0,
          }}
          transition={{
            ease: "easeInOut"
          }}
        >

        </motion.div>
        <div data-id="container" className={`laptop:container flex mx-auto justify-between laptop:py-6 mobile:py-4 items-center mobile:px-4 laptop:px-0 `}>
          <BrandComp onClick={_handleGoto} />
          <div data-id="menu" className='text-xl font-medium flex items-center gap-x-10'>
            <ul className='laptop:flex items-center gap-x-10 mobile:hidden'>
              <li><a onClick={_handleGoto} href="/service">Services</a></li>
              <li><a onClick={_handleGoto} href="/about">About</a></li>
              <li><a onClick={_handleGoto} href="/contact" className='px-6 py-3 bg-neutral-800 rounded-full text-white'>Contact</a></li>
            </ul>
            <button className='cursor-pointer flex justify-center items-center' onClick={_handleToggle}>
              <Menu fill={twcolor.neutral[800]} className="mobile:w-8 " active={isActive} />
            </button>
          </div>
        </div>
      </nav>
    </React.Fragment>
  )
}

export default Navbar

const OverlayChange = ({ isAnimate, ...props }) => {
  return (
    <React.Fragment>
      <motion.div className={'absolute w-screen h-screen overflow-hidden py-0 bg-neutral-200 bottom-0 ' + props.className}
        style={{
          zIndex: 999,
        }}
        initial={{
          height: 100,
        }}

        animate={{
          height: isAnimate ? "100vh" : 0
        }}

        transition={{
          duration: .6
        }}
      >
        {props.children}
      </motion.div>
      <motion.div className={'absolute w-screen h-screen overflow-hidden py-0 bg-black bottom-0 ' + props.className}
        style={{
          zIndex: 999,
        }}
        initial={{
          height: 0,
        }}

        animate={{
          height: isAnimate ? "100vh" : 0
        }}

        transition={{
          duration: .5,
          delay: .25,
        }}
      >
        {props.children}
      </motion.div>
    </React.Fragment>
  )
}