import styles from "./Button.module.scss"
import { CSSProperties, FC } from "react"

interface Props {
  children: string
  onClick?: () => void
  disabled?: boolean
  variant?: string
  style?: CSSProperties
}

interface VariantStyles {
  [index: string]: string | undefined
}

const Button: FC<Props> = ({
  children,
  onClick,
  disabled,
  style,
  variant = "primary"
}) => {
  const variantStyles: VariantStyles = {
    primary: styles.primayButtonWrapper,
    secondary: styles.secondaryButtonWrapper
  }
  return (
    <button
      className={
        disabled === true ? styles.buttonWrapperDisabled : variantStyles[variant]
      }
      onClick={onClick}
      disabled={disabled}
      data-testid="button"
      style={style}
    >
      {children}
    </button>
  )
}

export default Button
