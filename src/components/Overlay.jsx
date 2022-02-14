import { motion } from "framer-motion"
import React from "react"

const Overlay = (props) => {
  return (
    <React.Fragment>
      <motion.div className={'fixed w-screen h-screen ' + props.className}
        style={{
          zIndex: 999,
        }}
        animate={{
          overflow: "hidden",
          height: 0,
          paddingTop: 0,
          paddingBottom: 0,
        }}

        transition={{
          delay: 1.2,
          duration: .6
        }}
      >
        {props.children}
      </motion.div>
      <motion.div className={'fixed w-screen h-screen bg-blue-500 ' + props.className}
        style={{
          zIndex: 998,
        }}
        animate={{
          overflow: "hidden",
          height: 0,
          paddingTop: 0,
          paddingBottom: 0,
        }}

        transition={{
          delay: 1.45,
          duration: .5
        }}
      >
        {props.children}
      </motion.div>
    </React.Fragment>
  )
}

export default Overlay