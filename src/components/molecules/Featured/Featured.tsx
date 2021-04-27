import styles from "./Featured.module.scss"
import { Typography } from "@components/atoms"
import { FC } from "react"
import { Link } from "react-router-dom"

interface Props {
  image: string
  name: string
  id: number
}

const Featured: FC<Props> = ({ image, name, id }) => {
  return (
    <Link to={`/product/details/${id}`}>
      <div className={styles.featuredWrapper}>
        <img src={image} alt="image" />
        <Typography variant="sTitle">{name}</Typography>
      </div>
    </Link>
  )
}

export default Featured
