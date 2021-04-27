import styles from "./Footer.module.scss"
import { FC } from "react"
import { Icons, Typography } from "@components/atoms"

const { logoWhite } = Icons

const Footer: FC = () => {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footerBody}>
        <div className={styles.footerLogoSection}>
          <img src={logoWhite} alt="logo" />
          <Typography variant="sAnchor">{"© 2021 Style&Stuff"}</Typography>
        </div>
        <div className={styles.footerInfoSection1}>
          <Typography variant="pTitle">Help</Typography>
          <Typography variant="sAnchor">{"Delivery & Returns"}</Typography>
          <Typography variant="sAnchor">{"Help & FAQs"}</Typography>
          <Typography variant="sAnchor">Affiliates</Typography>
          <Typography variant="sAnchor">Student Discount</Typography>
        </div>
        <div className={styles.footerInfoSection2}>
          <Typography variant="pTitle">Legal</Typography>
          <Typography variant="sAnchor">Terms and Conditions</Typography>
          <Typography variant="sAnchor">Privacy Policy</Typography>
        </div>
      </div>
    </div>
  )
}

export default Footer
