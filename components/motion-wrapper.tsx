"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface MotionWrapperProps {
  children: ReactNode
  delay?: number
}

export function MotionWrapper({ children, delay = 0 }: MotionWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  )
}
