import React from "react"
import ArrowBtn from "./svg/ArrowBtn"

const ButtonArrow = ({ text, href, onClick, color, ...props }) => {

  return (
    <div className='mobile:pt-0 laptop:pt-10 text-xl font-medium flex items-center gap-x-4'>
      <span style={{ color: color }}>
        <a href={href} onClick={onClick} rel={text} >
          {text}
        </a>
      </span>
      <a href={href} onClick={onClick} rel={text} >
        <ArrowBtn fill={color} />
      </a>
    </div>
  )
}

export default ButtonArrow