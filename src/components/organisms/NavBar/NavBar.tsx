import { FC } from "react"
import { Typography } from "../../atoms"
import styles from "./NavBar.module.scss"

const NavBar: FC = () => {
  return (
    <div className={styles.navWrapper}>
      <div className={styles.navBody}>
        <div className={styles.navMenu}>
          <Typography variant="sTitle">OUTERWEAR</Typography>
          <Typography variant="sTitle">TOPS</Typography>
          <Typography variant="sTitle">LEGWEAR</Typography>
          <Typography variant="sTitle">ACCESORIES</Typography>
        </div>
        <div className={styles.navMobileMenu}>
          <img src={require("../../../../public/images/menu.svg")} alt="menu"/>
        </div>
        <div className={styles.navLogo}>
          <img src={require("../../../../public/images/logo.svg")} alt="logo"/>
        </div>
        <div className={styles.navUser}>
          <img src={require("../../../../public/images/user.svg")} alt="user"/>
          <img src={require("../../../../public/images/wish.svg")} alt="favs"/>
          <img src={require("../../../../public/images/bag.svg")} alt="bag"/>
        </div>
      </div>
    </div>
  )
}

export default NavBar
