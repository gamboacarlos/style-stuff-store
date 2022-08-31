import { FC, ReactNode } from "react"
import styles from "./Container.module.scss"

interface Props {
  children: ReactNode
  marginTop?: string
}

const Container: FC<Props> = ({ children, marginTop }) => {
  return (
    <div
      className={styles.containerWrapper}
      style={{ marginTop: `${marginTop}` }}
      data-testid="main-container"
    >
      {children}
    </div>
  )
}

export default Container
