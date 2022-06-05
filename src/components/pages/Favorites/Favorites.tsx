import { Container, Typography } from "@components/atoms"
import React, { FC, useEffect } from "react"
import styles from "./Favorites.module.scss"
import { useSelector } from "react-redux"
import { MainStore } from "@store/store"
import FavoriteItem from "@components/molecules/favoriteItem/FavoriteItem"
import { useHistory } from "react-router-dom"

const Favorites: FC = () => {
  const history = useHistory()
  const favorites = useSelector((state: MainStore) => state.shopping.favorites)
  useEffect(() => {
    window.scrollTo(0, 0)
    favorites.length === 0 &&
      setTimeout(() => {
        history.push("/")
      }, 1500)
  }, [favorites])
  return (
    <Container>
      {favorites.length > 0 ? (
        <div className={styles.favoritesViewWrapper}>
          {favorites.map((fav) => (
            <FavoriteItem key={fav.id} data={fav} />
          ))}
        </div>
      ) : (
        <div className={styles.emptyMessage}>
          <Typography variant="pTitle">THE FAVORITES LIST IS EMPTY</Typography>
        </div>
      )}
    </Container>
  )
}

export default Favorites
