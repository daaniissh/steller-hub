import React from 'react'
import { motion } from 'framer-motion'

const AnimatePage = ({ children, initial, animate, exit }) => {
  const animation = {
    initial,
    animate,
    exit,
  }
  return (
    <motion.div variants={animation} initial="initial" animate="animate" exit="exit" transition={{
      ease: "easeInOut",
      duration: 0.8
    }}>
      {children}
    </motion.div>
  )
}

export default AnimatePage