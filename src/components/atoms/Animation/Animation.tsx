import { motion } from "framer-motion"
import { FC, ReactNode } from "react"

interface Props {
  children: ReactNode
  open: boolean
}
const VARIANTS = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      opacity: 0.5
    }
  }
}

const Animation: FC<Props> = ({ children, open }) => {
  return (
    <motion.div
      initial="hidden"
      animate={open ? "visible" : "hidden"}
      variants={VARIANTS}
    >
      {children}
    </motion.div>
  )
}

export default Animation
