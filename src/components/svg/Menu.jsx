import React from "react";
import { motion } from 'framer-motion'
import { useMemo } from "react";
function Menu(props) {
  const { fill } = props
  const isActive = props?.active || false

  const config = useMemo(() => ({
    rotate: isActive
      ? 30
      : 0,
    y: isActive
      ? 12
      : 0
  }), [isActive])

  return (
    <div className={props.className}>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        className={"h-2 w-8"}
        animate={{
          ...config
        }}>
        <motion.path stroke={fill || "#2B2B2B"} strokeWidth="4" d="M0 2L40 2"></motion.path>
      </motion.svg>

      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        className={"h-4 w-8"}
        animate={{
          rotate: -(config.rotate),
          y: -(config.y)
        }}>
        <motion.path stroke={fill || "#2B2B2B"} strokeWidth="4" d="M0 14L40 14"></motion.path>
      </motion.svg>
    </div>
  );
}

export default Menu;