import React from "react";
import { motion } from 'framer-motion'

function Menu(props) {
  const { fill } = props
  const isActive = props?.active || false

  // const config = useMemo(() => ({
  //   rotate: isActive
  //     ? 45
  //     : 0,
  //   y: isActive
  //     ? 12.5
  //     : 0
  // }), [isActive])
  return (
    <div className={props.className}>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        className={"h-2 w-8"}
        animate={{
          // ...configi
          rotate: isActive
            ? 180 - 45
            : 0,
          y: isActive
            ? 12
            : 0,
          x: isActive ? -6 : 0,
        }}
        transition={{
          type: "tween",
          duration: .25
        }}
      >
        <motion.path stroke={fill || "#2B2B2B"} strokeWidth="4" d="M0 2L40 2"></motion.path>
      </motion.svg>

      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        className={"h-4 w-8"}
        animate={{
          rotate: isActive
            ? 45
            : 0,
          y: isActive
            ? -8
            : 0
        }}
        transition={{
          type: "tween",
          duration: .25
        }}
      >
        <motion.path stroke={fill || "#2B2B2B"} strokeWidth="4" d="M0 14L40 14"></motion.path>
      </motion.svg>
    </div>
  );
}

export default Menu;