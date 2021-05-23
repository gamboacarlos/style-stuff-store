/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react"
import { Link } from "react-router-dom"
import Typography from "../../atoms/Typography/Typography"
import styles from "./ProductCard.module.scss"

interface Props {
  image: string
  id: number
  name: string
  price: number
  loading?: boolean
}

const ProductCard: FC<Props> = ({ id, image, name, price }) => {
  return (
    <Link to={`/product/details/${id}`}>
      <div className={styles.cardWrapper} key={id}>
        <img src={image} alt="image" />
        <Typography variant="sTitle">{name}</Typography>
        <Typography variant="span">{`€‌${price}.00`}</Typography>
      </div>
    </Link>
  )
}

export default ProductCard
