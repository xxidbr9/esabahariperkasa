import React from "react";
import { useContext } from "react";
import routes from "../config/routes";
import { CONSTANT, MainContext } from "../context/Main.context";
import twcolor from 'tailwindcss/colors'
import ButtonArrow from "./ButtonArrow";

const MoreInfo = ({ ...props }) => {
  const { dispatch } = useContext(MainContext)

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

  // return (
  // <div className='laptop:container mx-auto mobile:px-4 laptop:px-0 laptop:py-20 mobile:py-5'>
  //   <h1 className='laptop:text-4xl mobile:text-xl laptop:font-light'>Need to know Us more?</h1>
  //   <div className='laptop:mt-10 mobile:mt-4 mobile:w-full h-auto mobile:flex mobile:flex-col laptop:block'>
  //     <a onClick={_handleGoto} href={routes.CONTACT} className='text-center px-6 py-3 text-xl w-full bg-neutral-800 rounded-full text-white'>Contact Us</a>
  //   </div>
  // </div>
  // )
  return (
    <div className="laptop:container mx-auto mobile:px-4 laptop:px-0 laptop:py-20 mobile:py-10">
      <div className='flex flex-col gap-y-3'>
        <h1 className='laptop:text-6xl font-bold text-neutral-800 mobile:text-2xl'>Need to know Us more?</h1>
        <p className='laptop:text-lg laptop:max-w-screen-tablet text-neutral-600'>
          We believes that it is essential to act with integrity in all its activities, to treat all its employees and customers in a fair and respectful manner. The company aims to remain the first choice of its customers.
        </p>
        <div className='laptop:mt-10 mobile:mt-4 mobile:w-full h-auto mobile:flex mobile:flex-col laptop:block'>
          <ButtonArrow
            color={twcolor.neutral[800]}
            text={"Contact Us"} href={routes.SERVICE}
            onClick={(e) => _handleGoto(e, routes.SERVICE)} />
        </div>
      </div>
    </div>
  )
}

export default MoreInfo