import { FC, ReactNode } from "react"
import styles from "./Typography.module.scss"

interface InLineStyles {
  [name: string]: string | number
}
interface Props {
  children: ReactNode
  subStyles?: InLineStyles
  variant?: string
  testId?: string
}

const Typography: FC<Props> = ({ children, variant, subStyles, testId }) => {
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
      case "tTitle":
        return styles.tertiaryTitle
      case "tSubTitle":
        return styles.tertiarySubTitle
      case "span":
        return styles.span
      default:
        return styles.paragraph
    }
  }
  return (
    <p className={style()} style={subStyles} data-testid={testId}>
      {children}
    </p>
  )
}

export default Typography
