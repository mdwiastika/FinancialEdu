'use client'

import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

type FloatingAnimationProps = {
  children: ReactNode
  duration?: number
  delay?: number
  yOffset?: number
  className?: string
}

export default function FloatingAnimation({
  children,
  duration = 4,
  delay = 0,
  yOffset = 10,
  className = '',
}: FloatingAnimationProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -yOffset, 0],
      }}
      transition={{
        duration,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: 'reverse',
        ease: 'easeInOut',
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}
