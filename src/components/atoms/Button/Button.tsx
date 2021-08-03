import styles from "./Button.module.scss"
import { FC } from "react"

interface Props {
  children: string
  onClick?: () => void
  disabled?: boolean
}

const Button: FC<Props> = ({ children, onClick, disabled }) => {
  return (
    <button
      className={disabled === true ? styles.buttonWrapperDisabled : styles.buttonWrapper}
      onClick={onClick}
      disabled={disabled}
      data-testid="button"
    >
      {children}
    </button>
  )
}

export default Button
