import { FC, ReactNode } from "react"
import styles from "./Typography.module.scss"

interface Props {
  children: ReactNode
  variant?: string
}

const Typography: FC<Props> = ({ children, variant }) => {
  const style = () => {
    switch (variant) {
    case "pTitle":
      return styles.primaryTitle
    case "sTitle":
      return styles.secundaryTitle
    case "span":
      return styles.span
    default:
      return styles.paragraph
    }
  }
  return <p className={style()}>{children}</p>
}

export default Typography
