import { FC, useState } from "react"
import styles from "./NavBar.module.scss"
import { Link } from "react-router-dom"
import { NavMobileMenu, NavMenu } from "@components/organisms"
import { Icons } from "@components/atoms"

const { menu, logo, favs, user, bag } = Icons

const NavBar: FC = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const handleClick = () => setOpenMenu(!openMenu)

  return (
    <div className={styles.navWrapper}>
      <div className={styles.navContainer}>
        <div className={styles.navBody}>
          <NavMenu />
          <img
            src={menu}
            className={styles.navMobileMenuOpenButton}
            alt="menu"
            onClick={() => handleClick()}
          />
          <NavMobileMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
          <Link to="/">
            <div className={styles.navLogo}>
              <img src={logo} alt="logo" />
            </div>
          </Link>
          <div className={styles.navUser}>
            <img src={user} alt="user" />
            <img src={favs} alt="favs" />
            <img src={bag} alt="bag" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
