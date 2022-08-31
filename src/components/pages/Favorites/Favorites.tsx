import { Container, Typography } from "@components/atoms"
import { FC, useEffect } from "react"
import styles from "./Favorites.module.scss"
import FavoriteItem from "@components/molecules/FavoriteItem/FavoriteItem"
import { useHistory } from "react-router-dom"
import useShoppingReducer from "@hooks/useShoppingReducer"

const Favorites: FC = () => {
  // Hooks =============================================================================
  const history = useHistory()
  const { favorites } = useShoppingReducer()
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
