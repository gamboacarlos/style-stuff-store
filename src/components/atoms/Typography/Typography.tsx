import { CSSProperties, FC, ReactNode } from "react"
import styles from "./Typography.module.scss"

interface InLineStyles {
  [name: string]: CSSProperties
}
interface Props {
  children: ReactNode
  subStyles?: InLineStyles
  variant?: string
  testId?: string
}

const Typography: FC<Props> = ({ children, variant = "default", subStyles, testId }) => {
  const typographyStyle: Record<string, string | undefined> = {
    pTitle: styles.primaryTitle,
    sTitle: styles.secundaryTitle,
    pAnchor: styles.primaryAnchor,
    sAnchor: styles.secundaryAnchor,
    tTitle: styles.tertiaryTitle,
    tSubTitle: styles.tertiarySubTitle,
    span: styles.span,
    default: styles.paragraph
  }

  return (
    <p className={typographyStyle[variant]} style={subStyles} data-testid={testId}>
      {children}
    </p>
  )
}

export default Typography
