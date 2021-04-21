import { FC, ReactNode } from "react"
import styles from "./Typography.module.scss"

interface InLineStyles {
  [name: string]: string | number
}
interface Props {
  children: ReactNode
  subStyles?: InLineStyles
  variant?: string
}

const Typography: FC<Props> = ({ children, variant, subStyles }) => {
  const style = () => {
    switch (variant) {
      case "pTitle":
        return styles.primaryTitle
      case "sTitle":
        return styles.secundaryTitle
      case "pAnchor":
        return styles.primaryAnchor
      case "sAnchor":
        return styles.secundaryAnchor
      case "span":
        return styles.span
      default:
        return styles.paragraph
    }
  }
  return (
    <p className={style()} style={subStyles}>
      {children}
    </p>
  )
}

export default Typography
