import { FC, useState } from "react"
import { Typography } from "@components/atoms"
import styles from "./FavoriteItem.module.scss"
import { FavoritesItem_int } from "@store/shopping/productsTypes"
import { itemAnimationVariants } from "@utils/constants"
import useShoppingReducer from "@hooks/useShoppingReducer"
import { Icons } from "@components/atoms"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const FavoriteItem: FC<{ data: FavoritesItem_int }> = ({ data }) => {
  // Hooks =============================================================================
  const [removeAnimation, setRemoveAnimation] = useState<boolean>(false)
  const { handleDispatchRemoveFromFavorites } = useShoppingReducer()

  // Constants =========================================================================
  const { name, price, images, id } = data

  return (
    <motion.div
      initial={"hide"}
      animate={removeAnimation ? "hide" : "show"}
      variants={itemAnimationVariants}
      className={styles.favoriteWrapper}
    >
      <Link to={`/product/details/${id}`}>
        <div className={styles.thumbnailGrid}>
          <img src={images[0].image_270x270} alt="img" className={styles.main} />
          <img src={images[1].image_270x270} alt="img" className={styles.mini1} />
          <img src={images[2].image_270x270} alt="img" className={styles.mini2} />
        </div>
      </Link>
      <div className={styles.favoriteInfo}>
        <Link to={`/product/details/${id}`}>
          <Typography variant="pTitle" testId="favName">
            {name}
          </Typography>
        </Link>
        <Typography variant="span" testId="favPrice">{`€‌ ${price}`}</Typography>
      </div>
      <div className={styles.favoriteRemoveControl}>
        <img
          src={Icons.close}
          alt="X"
          onClick={() => {
            setTimeout(() => {
              handleDispatchRemoveFromFavorites(id)
            }, 600)
            setRemoveAnimation(!removeAnimation)
          }}
        />
      </div>
    </motion.div>
  )
}

export default FavoriteItem
