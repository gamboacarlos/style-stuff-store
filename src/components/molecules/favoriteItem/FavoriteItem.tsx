import { Typography } from "@components/atoms"
import React, { FC } from "react"
import styles from "./FavoriteItem.module.scss"
import { useDispatch } from "react-redux"
import { FavoritesItem_int } from "@store/shopping/productsTypes"
import { Icons } from "@components/atoms"
import { removeFromFavorites } from "@store/shopping/shopping.actions"
import { Link } from "react-router-dom"

const FavoriteItem: FC<{ data: FavoritesItem_int }> = ({ data }) => {
  const { name, price, images, id } = data
  const dispatch = useDispatch()
  const { close } = Icons

  return (
    <div className={styles.favoriteWrapper}>
      <Link to={`/product/details/${data.id}`}>
        <div className={styles.thumbnailGrid}>
          <img src={images[0].image_270x270} alt="img" className={styles.main} />
          <img src={images[1].image_270x270} alt="img" className={styles.mini1} />
          <img src={images[2].image_270x270} alt="img" className={styles.mini2} />
        </div>
      </Link>
      <div className={styles.favoriteInfo}>
        <Link to={`/product/details/${data.id}`}>
          <Typography variant="pTitle">{name}</Typography>
        </Link>
        <Typography variant="span">{`€‌ ${price}`}</Typography>
      </div>
      <div className={styles.favoriteRemoveControl}>
        <img src={close} alt="X" onClick={() => dispatch(removeFromFavorites(id))} />
      </div>
    </div>
  )
}

export default FavoriteItem
