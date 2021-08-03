import { FC, useEffect } from "react"
import styles from "./Bag.module.scss"
import { useDispatch, useSelector } from "react-redux"
import { MainStore } from "@store/store"
import { Button, Typography } from "@components/atoms"
import { BagItem } from "@components/molecules"
import { shoppingBagToggle } from "@store/UI/UI.actions"
import { setBagTotal, setLocalBag } from "@store/shopping/shopping.actions"

const SLIDE = {
  right: 0,
  transition: "350ms"
}

const Bag: FC = () => {
  const dispatch = useDispatch()
  const bag = useSelector((state: MainStore) => state.shopping.bag)
  const total = useSelector((state: MainStore) => state.shopping.bagTotal)
  const openShoppingBag = useSelector((state: MainStore) => state.UI.shoppingBagState)

  useEffect(() => {
    const bagData = JSON.parse(localStorage.getItem("bagData") || "[]")
    if (bagData.length >= 1) dispatch(setLocalBag(bagData))
  }, [])
  useEffect(() => {
    localStorage.setItem("bagData", JSON.stringify(bag))

    // Set bag total price
    dispatch(setBagTotal())
  }, [bag])

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
        <Button>Checkout</Button>
        <Button onClick={() => dispatch(shoppingBagToggle(!openShoppingBag))}>
          Continue shopping
        </Button>
      </div>
    </div>
  )
}

export default Bag
