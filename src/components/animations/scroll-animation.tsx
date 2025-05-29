"use client"

import { useEffect, type ReactNode } from "react"
import { motion, useAnimation, type Variant } from "framer-motion"
import { useInView } from "react-intersection-observer"

type ScrollAnimationProps = {
  children: ReactNode
  viewportAmount?: number
  delay?: number
  duration?: number
  variants?: {
    hidden: Variant
    visible: Variant
  }
  className?: string
}

export default function ScrollAnimation({
  children,
  viewportAmount = 0.2,
  delay = 0,
  duration = 0.5,
  variants,
  className = "",
}: ScrollAnimationProps) {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: viewportAmount,
  })

  const defaultVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  }

  const selectedVariants = variants || defaultVariants

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.div ref={ref} animate={controls} initial="hidden" variants={selectedVariants} className={className}>
      {children}
    </motion.div>
  )
}
