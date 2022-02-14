import React from 'react'
import { useCallback } from 'react'
import { useRef } from 'react'
import twcolor from 'tailwindcss/colors'
import Brand from '../components/svg/Brand'

const BrandComp = ({ onClick, ...props }) => {
  const uriRef = useRef(null)
  const _handleLogoClick = useCallback((e) => {
    const href = uriRef.current.href
    onClick(e, href)
  }, [uriRef, onClick])

  return (
    <a onClick={_handleLogoClick} ref={uriRef} href='/' data-id="brand" className='flex gap-x-4 items-center text-xl font-medium text-neutral-800 relative'>
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
    </a>
  )
}

export default BrandComp