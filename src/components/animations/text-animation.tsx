'use client'

import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import type { JSX } from 'react/jsx-runtime'

type TextAnimationProps = {
  text: string
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'
  delay?: number
  duration?: number
  staggerDelay?: number
  className?: string
}

export default function TextAnimation({
  text,
  tag = 'div',
  delay = 0,
  duration = 0.5,
  staggerDelay = 0.02,
  className = '',
}: TextAnimationProps) {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const words = text.split(' ')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay,
        staggerChildren: staggerDelay,
      },
    },
  }

  const wordVariants = {
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
      controls.start('visible')
    }
  }, [controls, inView])

  const Tag = tag as keyof JSX.IntrinsicElements

  return (
    <Tag className={className}>
      <motion.span
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={containerVariants}
        style={{ display: 'inline-block' }}
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            variants={wordVariants}
            style={{ display: 'inline-block', marginRight: '0.25em' }}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  )
}
