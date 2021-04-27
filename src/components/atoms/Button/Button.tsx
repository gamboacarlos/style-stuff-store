import styles from "./Button.module.scss"
import { FC } from "react"

interface Props {
  children: string
}

const Button: FC<Props> = ({ children }) => {
  return <button className={styles.buttonWrapper}>{children}</button>
}

export default Button
