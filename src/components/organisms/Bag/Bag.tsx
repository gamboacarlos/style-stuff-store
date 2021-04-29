import { FC } from "react"
import styles from "./Bag.module.scss"
import { useDispatch, useSelector } from "react-redux"
import { MainStore } from "@store/store"
import { Button, Typography } from "@components/atoms"
import { BagItem } from "@components/molecules"
import { shoppingBagToggle } from "@store/UI/UI.actions"

const SLIDE = {
  right: 0,
  transition: "350ms"
}

const Bag: FC = () => {
  const dispatch = useDispatch()
  const bagData = useSelector((state: MainStore) => state.shopping.bag)
  const openShoppingBag = useSelector((state: MainStore) => state.UI.shoppingBagState)

  return (
    <div className={styles.bagWrapper} style={openShoppingBag ? SLIDE : {}}>
      <div className={styles.bagTitle}>
        <Typography variant="pTitle">SHOPPING BAG</Typography>
      </div>
      <div className={styles.bagItems}>
        {bagData.map((prod) => {
          return <BagItem data={prod} key={prod.variant_id} />
        })}
      </div>
      <div className={styles.bagTotal}>
        <Typography variant="pTitle">Total</Typography>
        <Typography variant="pTitle">$235.00</Typography>
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
