import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { useWindowScroll } from 'react-use'
import twcolor from 'tailwindcss/colors'
import Menu from '../components/svg/Menu'
import BrandComp from './BrandComp'
import { motion } from 'framer-motion'
import { useCallback } from 'react'
import routes from '../config/routes'
import { CONSTANT, MainContext } from '../context/Main.context'
import OverlayChange from './OverlayChange'

const Navbar = ({ isNavbarOpen, ...props }) => {
  const [isActive, setIsActive] = useState(isNavbarOpen || false)

  const { y } = useWindowScroll()
  const url = typeof window !== 'undefined' ? window.location.href : '';
  const path = url.split("/")
  const lastPath = !!path[path.length - 1] ? path[path.length - 1] : path[path.length - 2]

  const _handleToggle = useCallback(() => {
    if (isActive) {
      window.document.body.classList.remove("overflow-hidden")
    } else {
      window.document.body.classList.add("overflow-hidden")
    }
    setIsActive(!isActive)
  }, [isActive])

  const { state: { isChangePage }, dispatch } = useContext(MainContext)

  const _handleGoto = (e, href) => {
    e.preventDefault();
    href = href || e.target.href
    dispatch({ type: CONSTANT.SET_IS_CHANGE_PAGE, payload: true })
    setTimeout(() => {
      window.scrollTo({ top: 0 })
      window.location.href = href
      // dispatch({ type: CONSTANT.SET_IS_CHANGE_PAGE, payload: false })
    }, 1000)
  }



  const NavLink = ({ href, onClick, children, ...props }) => (
    <li className='hover:text-blue-500 transition-all duration-150 flex flex-col items-center gap-y-2 '>
      <a className={`active:text-blue-500 ${href === "/" + lastPath && "text-blue-500"} `} onClick={onClick} href={href}>{children}</a>
    </li>
  )


  return (
    <React.Fragment>
      <OverlayChange isAnimate={isChangePage} />
      <nav className={`w-full fixed z-50 transition-all duration-150 ${y > 0 ? "bg-white shadow-lg" : ""}`} style={{
        zIndex: y > 0 ? 99 : 50
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
              <NavLink onClick={_handleGoto} href={routes.SERVICE}>Services</NavLink>
              <NavLink onClick={_handleGoto} href={routes.ABOUT}>About</NavLink>
              <li><a onClick={_handleGoto} href={routes.CONTACT} className='px-6 py-3 bg-neutral-800 rounded-full text-white'>Contact</a></li>
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
