import { Container } from "@components/atoms"
import React, { FC, useEffect } from "react"
import styles from "./Favorites.module.scss"
import { useSelector, useDispatch } from "react-redux"
import { MainStore } from "@store/store"
import FavoriteItem from "@components/molecules/favoriteItem/FavoriteItem"
import { setLocalFavorites } from "@store/shopping/shopping.actions"

const Favorites: FC = () => {
  const favorites = useSelector((state: MainStore) => state.shopping.favorites)
  return (
    <Container>
      <div className={styles.favoritesViewWrapper}>
        {favorites.map((fav) => (
          <FavoriteItem key={fav.id} data={fav} />
        ))}
      </div>
    </Container>
  )
}

export default Favorites
