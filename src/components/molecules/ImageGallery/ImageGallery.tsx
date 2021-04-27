import { ProductImages_type } from "@store/shopping/productsTypes"
import { FC } from "react"
import styles from "./ImageGallery.module.scss"

interface Props {
  images: ProductImages_type
}

const ImageGallery: FC<Props> = ({ images }) => {
  return (
    <div className={styles.galleryWrapper}>
      <img src={images[0].image_780x780} alt="image" />
      <img src={images[1].image_780x780} alt="image" />
      <img src={images[2].image_780x780} alt="image" />
    </div>
  )
}

export default ImageGallery
