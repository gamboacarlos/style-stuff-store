import { Typography } from "@components/atoms"
import React, { FC, useState } from "react"
import styles from "./FavoriteItem.module.scss"
import { useDispatch } from "react-redux"
import { FavoritesItem_int } from "@store/shopping/productsTypes"
import { Icons } from "@components/atoms"
import { removeFromFavorites } from "@store/shopping/shopping.actions"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const FavoriteItem: FC<{ data: FavoritesItem_int }> = ({ data }) => {
  const [removeAnimation, setRemoveAnimation] = useState(false)
  const { name, price, images, id } = data
  const dispatch = useDispatch()
  const { close } = Icons

  return (
    <motion.div
      initial={"hide"}
      animate={removeAnimation ? "hide" : "show"}
      variants={{
        show: {
          transform: "translateX(0em)",
          opacity: 1,
          transition: { delay: 0.05, duration: 0.2 }
        },
        hide: {
          transform: "translateX(5em)",
          opacity: 0,
          transition: { delay: 0.05, duration: 0.2 }
        }
      }}
      className={styles.favoriteWrapper}
    >
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
        <img
          src={close}
          alt="X"
          onClick={() => {
            setTimeout(() => {
              dispatch(removeFromFavorites(id))
            }, 600)
            setRemoveAnimation(!removeAnimation)
          }}
        />
      </div>
    </motion.div>
  )
}

export default FavoriteItem
