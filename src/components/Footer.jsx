import React, { useContext, useEffect } from 'react'
import { AiOutlineInstagram, AiFillFacebook } from 'react-icons/ai'
import { GrLinkedinOption } from 'react-icons/gr'
import Brand from './svg/Brand'
import twcolor from 'tailwindcss/colors'
import routes from '../config/routes'
import { CONSTANT, MainContext } from '../context/Main.context'

const Footer = () => {
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

  const FootLink = ({ href, onClick, children, ...props }) => (
    <li className='hover:text-white transition-all duration-150'>
      <a onClick={onClick} href={href}>{children}</a>
    </li>
  )

  return (
    <React.Fragment>
      <footer footer className='bg-black py-10' >
        <div className='laptop:container text-white mx-auto laptop:grid laptop:grid-cols-12 mobile:px-4 laptop:px-0'>
          <div className='col-start-3 col-span-8 flex laptop:justify-center flex-col laptop:items-center laptop:gap-y-10'>
            <div className='flex laptop:flex-col mobile:gap-x-4 laptop:gap-x-0 laptop:justify-center laptop:items-center gap-y-4 w-full'>
              <span className='w-14 h-14'>
                <Brand fill={twcolor.white} />
              </span>
              <div className='font-medium text-xl text-center'>
                <span className='mobile:hidden laptop:block'>
                  Esa Bahari Perkasa
                </span>
                <div className='mobile:flex flex-col items-start laptop:hidden'>
                  <span>
                    Esa Bahari
                  </span>
                  <span>
                    Perkasa
                  </span>
                </div>
              </div>
            </div>
            <ul className='flex laptop:justify-center gap-x-10 laptop:items-center text-neutral-400 mobile:flex-col laptop:flex-row mobile:gap-y-4 laptop:gap-y-0 mobile:py-8 laptop:py-0'>
              <FootLink href={routes.HOME} onClick={_handleGoto}>Home</FootLink>
              <FootLink href={routes.SERVICE} onClick={_handleGoto}>Services</FootLink>
              <FootLink href={routes.ABOUT} onClick={_handleGoto}>About</FootLink>
              <FootLink href={routes.CONTACT} onClick={_handleGoto}>Contact</FootLink>
            </ul>
            <div className='w-full flex flex-col gap-y-4 text-neutral-400'>
              <hr className='border h-auto w-full border-neutral-500' />
              <div className='w-full flex laptop:flex-row laptop:justify-between laptop:items-center mobile:flex-col-reverse mobile:gap-y-4 laptop:gap-y-0'>
                <span className='text-sm'>
                  © 2022 xxidbr9. All rights reserved.
                </span>
                <div className='flex flex-row gap-x-2'>
                  <a rel="noreferrer" target='_blank' href='https://instagram.com/dailydevelopers'>
                    <AiOutlineInstagram size={24} />
                  </a>
                  <a rel="noreferrer" target='_blank' href="https://linkedin.com/in/xxidbr9">
                    <GrLinkedinOption size={24} />
                  </a>
                  <a rel="noreferrer" target='_blank' href="https://facebook.com/bernand.bad">
                    <AiFillFacebook size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  )
}

export default Footer