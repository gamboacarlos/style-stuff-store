import { FC, useEffect } from "react"
import { useSelector } from "react-redux"
import { MainStore } from "@store/store"
import { BagItem } from "@components/molecules"
import { Button, Container, Typography } from "@components/atoms"
import styles from "./CheckoutPage.module.scss"

const CheckoutPage: FC = () => {
  const bag = useSelector((state: MainStore) => state.shopping.bag)
  const total = useSelector((state: MainStore) => state.shopping.bagTotal)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
        <div className={styles.checkoutInfoWrapper}>
          <div className={styles.infoSection}>
            <Typography variant="pTitle">Delivery Information</Typography>
            <Typography>
              We offer fast free shipping options worldwide. Check your estimated delivery
              date at checkout.
            </Typography>
            <Typography>
              FREE SHIPPING UK - spend over €‌110.00 Europe - spend over €‌135.00 Rest of
              World - spend over €‌200.00
            </Typography>
          </div>
          <div className={styles.infoSection}>
            <Typography variant="pTitle">Returns Policy</Typography>
            <Typography>
              If you wish to return any unworn / unused item(s) (faulty or otherwise) you
              may do so within 28 days of the date it was delivered to you and receive a
              refund or exchange (subject to availability).
            </Typography>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default CheckoutPage
