import React from 'react'
import { motion } from 'framer-motion'

export const Message = ({ message }) => {
  return (
    <motion.div
      className='message'
      initial={{ rotate: -5, scale: 0.2 }}
      animate={{ rotate: 0, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className='avatar'>👽</div>
      <div className='text'>{message.text}</div>
      <div className='avatar'>😈</div>
    </motion.div>
  )
}
