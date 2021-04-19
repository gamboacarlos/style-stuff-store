import { FC, ReactNode } from "react"
import styles from "./Text.module.scss"
interface Styles {
    [name:string]: string | number
}

interface Props {
    children: ReactNode,
    type: string,
    subStyles?: Styles
}

const Text: FC<Props> = ({type = "p", children, subStyles}) => {

  const Component = () => {
    switch (type) {
    case "h1":
      return (
        <h1 className={styles.Text} style={ subStyles }>
          {children}
        </h1>
      )
    case "div":
      return (
        <div className={styles.Text} style={subStyles}>
          <h1>{children}</h1>
        </div>
      )
    case "p":
      return (
        <p className={styles.Text} style={ subStyles }>
          {children}
        </p>
      )
    case "span":
      return (
        <p className={styles.span} style={ subStyles }>
          {children}
        </p>
      )
    default:
      return (
        <span className={styles.Text} style={subStyles }>
          {children}
        </span>
      )
    }
  }
  return (
    <>
      {Component()}
    </>
  )
}

export default Text



