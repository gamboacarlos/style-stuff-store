import { Button, Typography } from "@components/atoms"
import styles from "./Hero.module.scss"
import { FC } from "react"
import { Link } from "react-router-dom"

interface Props {
  mainImage: string
  mobileImage: string
  title: string
}

const Hero: FC<Props> = ({ mainImage, mobileImage, title }) => {
  return (
    <Link to="/product/details/91313">
      <div className={styles.heroWrapper}>
        <img src={mainImage} alt="image" className={styles.mainImage} />
        <img src={mobileImage} alt="image" className={styles.mobileImage} />
        <div className={styles.buttonContainer}>
          <Typography variant="tTitle">{title}</Typography>
          <Button>Shop now</Button>
        </div>
      </div>
    </Link>
  )
}

export default Hero
