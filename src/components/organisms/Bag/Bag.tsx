import { FC, useEffect } from "react"
import useShoppingReducer from "@hooks/useShoppingReducer"
import useUIReducer from "@hooks/useUIReducer"
import { Button, Typography } from "@components/atoms"
import { BagItem } from "@components/molecules"
import { Link } from "react-router-dom"
import styles from "./Bag.module.scss"

const Bag: FC = () => {
  // Hooks =================================================================================
  const { shoppingBagState, handleDispatchShoppingBagToggle } = useUIReducer()
  const {
    bag,
    favorites,
    bagTotal,
    handleDispatchSetLocalBag,
    handleDispatchSetLocalFavorites,
    handleDispatchSetBagTotal
  } = useShoppingReducer()

  // Constatnts ==============================================================================
  const SLIDE = {
    right: 0,
    transition: "350ms"
  }
  const bagData = JSON.parse(localStorage.getItem("bagData") || "[]")
  const favoritesData = JSON.parse(localStorage.getItem("favoritesData") || "[]")

  // Effects =================================================================================
  useEffect(() => {
    if (bagData.length >= 1) handleDispatchSetLocalBag(bagData)
    if (favoritesData.length >= 1) handleDispatchSetLocalFavorites(favoritesData)
  }, [])
  useEffect(() => {
    localStorage.setItem("bagData", JSON.stringify(bag))
    handleDispatchSetBagTotal() // Set bag total price
  }, [bag])
  useEffect(() => {
    localStorage.setItem("favoritesData", JSON.stringify(favorites))
  }, [favorites])

  return (
    <div className={styles.bagWrapper} style={shoppingBagState ? SLIDE : {}}>
      <div className={styles.bagTitle}>
        <Typography variant="pTitle">SHOPPING BAG</Typography>
      </div>
      <div className={styles.bagItems}>
        {bag.map((prod) => {
          return <BagItem data={prod} key={prod.variant_id} />
        })}
      </div>
      <div className={styles.bagTotal}>
        <Typography variant="pTitle">Total</Typography>
        <Typography variant="pTitle">{`€‌ ${bagTotal}`}</Typography>
      </div>
      <div className={styles.bagMenu}>
        <Link
          to="/bag/checkout"
          onClick={() => handleDispatchShoppingBagToggle(!shoppingBagState)}
        >
          <Button disabled={bag.length === 0 ? true : false}>Checkout</Button>
        </Link>
        <Button
          variant="secondary"
          style={{ marginTop: "2rem" }}
          onClick={() => handleDispatchShoppingBagToggle(!shoppingBagState)}
        >
          Continue shopping
        </Button>
      </div>
    </div>
  )
}

export default Bag
