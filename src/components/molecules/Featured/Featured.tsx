import styles from "./Featured.module.scss"
import { Typography } from "@components/atoms"
import { FC } from "react"

interface Props {
  image: string
  name: string
  id: number
}

const Featured: FC<Props> = ({ image, name, id }) => {
  return (
    <div className={styles.featuredWrapper}>
      <img src={image} alt="image" />
      <Typography variant="sTitle">{name}</Typography>
    </div>
  )
}

export default Featured
