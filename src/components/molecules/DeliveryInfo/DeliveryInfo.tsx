import { FC } from "react"
import styles from "./DeliveryInfo.module.scss"
import { Typography } from "@components/atoms"

const DeliveryInfo: FC = () => {
  return (
    <div className={styles.deliveryInfoWrapper}>
      <div className={styles.infoTitle}>
        <Typography variant="tSubTitle">{"DELIVERY & RETURNS"}</Typography>
      </div>
      <div className={styles.infoParagraph}>
        <Typography variant="sTitle">Free Worldwide Delivery</Typography>
        <Typography>Europe - spend over €‌130.00</Typography>
        <Typography>Rest of World - spend over €‌195.00</Typography>
      </div>
      <div className={styles.infoParagraph}>
        <Typography variant="sTitle">Express Delivery</Typography>
        <Typography>2-3 day delivery in Europe from €12</Typography>
      </div>
      <div className={styles.infoParagraph}>
        <Typography variant="sTitle">Flat Rate Returns</Typography>
        <Typography>
          Flat rate return fee for all international customers. Return within 28 working
          days after delivery for a refund.
        </Typography>
      </div>
    </div>
  )
}

export default DeliveryInfo
