"use client"

import { useEffect, type ReactNode } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

type StaggeredChildrenProps = {
  children: ReactNode
  viewportAmount?: number
  staggerDelay?: number
  childrenDelay?: number
  duration?: number
  className?: string
}

export default function StaggeredChildren({
  children,
  viewportAmount = 0.1,
  staggerDelay = 0.1,
  childrenDelay = 0,
  duration = 0.5,
  className = "",
}: StaggeredChildrenProps) {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: viewportAmount,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: childrenDelay,
        staggerChildren: staggerDelay,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  }

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.div ref={ref} animate={controls} initial="hidden" variants={containerVariants} className={className}>
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div key={i} variants={itemVariants}>
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  )
}
