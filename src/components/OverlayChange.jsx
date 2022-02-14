import { motion } from 'framer-motion'
import React from 'react'


const OverlayChange = ({ isAnimate, ...props }) => {
  return (
    <React.Fragment>
      <motion.div className={'fixed w-full h-full overflow-hidden py-0 bg-blue-500 bottom-0 ' + props.className}
        style={{
          zIndex: 999,
        }}
        initial={{
          height: 100,
        }}

        animate={{
          height: isAnimate ? "100%" : 0,
        }}

        transition={{
          duration: .6
        }}
      />
      <motion.div className={'fixed w-full h-full overflow-hidden py-0 bg-black bottom-0 ' + props.className}
        style={{
          zIndex: 999,
        }}
        initial={{
          height: 0,
        }}

        animate={{
          height: isAnimate ? "100%" : 0,
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

export default OverlayChange