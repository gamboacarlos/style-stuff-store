import { motion } from "framer-motion"
import React, { FC, ReactNode } from "react"

interface Props {
  children: ReactNode
  isOpen: boolean
}

const Animation: FC<Props> = ({ children, isOpen }) => {
  return (
    // <motion.div
    //   initial="hidden"
    //   animate="visible"
    //   variants={{
    //     hidden: {
    //       opacity: 0,
    //       transition: {
    //         delay: 0.4
    //       }
    //     },
    //     visible: {
    //       opacity: 1,
    //       transition: {
    //         delay: 0.4
    //       }
    //     }
    //   }}
    // >
    <motion.div
      initial={false}
      animate={isOpen ? "show" : "hide"}
      variants={{
        show: {
          transform: "translateX(0em)",
          opacity: 1,
          transition: { delay: 0.05, duration: 0.2 }
        },
        hide: {
          transform: "translateX(5em)",
          opacity: 0,
          transition: { delay: 0.03, duration: 0.1 }
        }
      }}
    >
      {children}
    </motion.div>
  )
}

export default Animation
