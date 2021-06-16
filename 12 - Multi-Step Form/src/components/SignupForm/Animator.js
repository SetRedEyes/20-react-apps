import React from 'react'
import { motion } from 'framer-motion'

export const Animator=({ children }) =>(
    <motion.div
      style={{ position: 'absolute' }}
      initaial={{ x: 200, scale: 0.8, opacity: 0 }}
      animate={{ x: 0, scale: 1, opacity: 1 }}
      exit={{ x: -200, scale: 0.8, opacity: 0 }}
    >
      {children}
    </motion.div>
  )

