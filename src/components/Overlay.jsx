import { motion } from "framer-motion"
import React from "react"

const Overlay = (props) => {
  return (
    <motion.div className={'absolute w-screen h-screen '+ props.className}
      style={{
        zIndex: 999,
      }}
      animate={{
        overflow: "hidden",
        height: 0,
        paddingTop: 0,
        paddingBottom: 0
      }}
      transition={{
        delay: 1.2,
        duration: .8
      }}
    >
      {props.children}
    </motion.div>
  )
}

export default Overlay