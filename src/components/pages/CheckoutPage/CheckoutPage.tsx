import { FC } from "react"
import { useSelector } from "react-redux"
import { MainStore } from "@store/store"
import { BagItem } from "@components/molecules"
import { Button, Container, Typography } from "@components/atoms"
import styles from "./CheckoutPage.module.scss"

const CheckoutPage: FC = () => {
  const bag = useSelector((state: MainStore) => state.shopping.bag)
  const total = useSelector((state: MainStore) => state.shopping.bagTotal)

  return (
    <Container>
      <div className={styles.checkoutWrapper}>
        {bag.map((prod) => (
          <BagItem data={prod} key={prod.variant_id} />
        ))}
        <div className={styles.checkoutTotal}>
          <Typography variant="pTitle">{`TOTAL (EXC. DELIVERY) €‌ ${total}`}</Typography>
        </div>
        <div className={styles.checkoutButton}>
          <Button>PROCEED TO CHECKOUT</Button>
        </div>
      </div>
    </Container>
  )
}

export default CheckoutPage
