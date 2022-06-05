import { FC, useEffect } from "react"
import styles from "./Bag.module.scss"
import { useDispatch, useSelector } from "react-redux"
import { MainStore } from "@store/store"
import { Button, Typography } from "@components/atoms"
import { BagItem } from "@components/molecules"
import { shoppingBagToggle } from "@store/UI/UI.actions"
import {
  setBagTotal,
  setLocalBag,
  setLocalFavorites
} from "@store/shopping/shopping.actions"
import { Link } from "react-router-dom"

const SLIDE = {
  right: 0,
  transition: "350ms"
}

const Bag: FC = () => {
  const dispatch = useDispatch()
  const bag = useSelector((state: MainStore) => state.shopping.bag)
  const favorites = useSelector((state: MainStore) => state.shopping.favorites)
  const total = useSelector((state: MainStore) => state.shopping.bagTotal)
  const openShoppingBag = useSelector((state: MainStore) => state.UI.shoppingBagState)

  useEffect(() => {
    const bagData = JSON.parse(localStorage.getItem("bagData") || "[]")
    const favoritesData = JSON.parse(localStorage.getItem("favoritesData") || "[]")
    if (bagData.length >= 1) dispatch(setLocalBag(bagData))
    if (favoritesData.length >= 1) dispatch(setLocalFavorites(favoritesData))
  }, [])
  useEffect(() => {
    localStorage.setItem("bagData", JSON.stringify(bag))

    // Set bag total price
    dispatch(setBagTotal())
  }, [bag])
  useEffect(() => {
    localStorage.setItem("favoritesData", JSON.stringify(favorites))
  }, [favorites])

  return (
    <div className={styles.bagWrapper} style={openShoppingBag ? SLIDE : {}}>
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
        <Typography variant="pTitle">{`€‌ ${total}`}</Typography>
      </div>
      <div className={styles.bagMenu}>
        <Link
          to="/bag/checkout"
          onClick={() => dispatch(shoppingBagToggle(!openShoppingBag))}
        >
          <Button disabled={bag.length === 0 ? true : false}>Checkout</Button>
        </Link>
        <Button
          variant="secondary"
          style={{ marginTop: "2rem" }}
          onClick={() => dispatch(shoppingBagToggle(!openShoppingBag))}
        >
          Continue shopping
        </Button>
      </div>
    </div>
  )
}

export default Bag
