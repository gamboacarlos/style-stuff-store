import { FC, useState } from "react"
import { Typography } from "../../../atoms"
import styles from "./NavBar.module.scss"
import { NavMobileMenu, NavMenu } from "../.."
import { Link } from "react-router-dom"

const NavBar: FC = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const handleClick = () => setOpenMenu(!openMenu)

  return (
    <div className={styles.navWrapper}>
      <div className={styles.navContainer}>
        <div className={styles.navBody}>
          <NavMenu />
          <img
            src={require("../../../../../public/images/menu.svg")}
            className={styles.navMobileMenuOpenButton}
            alt="menu"
            onClick={() => handleClick()}
          />
          <NavMobileMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
          <Link to="/">
            <div className={styles.navLogo}>
              <img src={require("../../../../../public/images/logo.svg")} alt="logo" />
            </div>
          </Link>
          <div className={styles.navUser}>
            <img src={require("../../../../../public/images/user.svg")} alt="user" />
            <img src={require("../../../../../public/images/wish.svg")} alt="favs" />
            <img src={require("../../../../../public/images/bag.svg")} alt="bag" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
