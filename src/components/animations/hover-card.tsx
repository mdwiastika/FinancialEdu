'use client'

import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

type HoverCardProps = {
  children: ReactNode
  className?: string
}

export default function HoverCard({
  children,
  className = '',
}: HoverCardProps) {
  return (
    <motion.div
      className={className}
      whileHover={{
        scale: 1.03,
        boxShadow:
          '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  )
}
