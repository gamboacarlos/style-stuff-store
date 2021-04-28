import styles from "./Button.module.scss"
import { FC } from "react"

interface Props {
  children: string
  onClick?: () => void
}

const Button: FC<Props> = ({ children, onClick }) => {
  return (
    <button className={styles.buttonWrapper} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
