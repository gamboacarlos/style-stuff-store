import { FC } from "react"
import styles from "./NavBar.module.scss"
import { Link } from "react-router-dom"
import { NavMobileMenu, NavMenu } from "@components/organisms"
import { Icons } from "@components/atoms"
import { useSelector, useDispatch } from "react-redux"
import { mobileMenuToggle } from "@store/interface/interface.actions"

const { menu, logo, favs, user, bag, close } = Icons

const NavBar: FC = () => {
  const dispatch = useDispatch()
  const openMenu = useSelector((state: any) => state.interface.mobileMenuState)
  const handleClick = () => dispatch(mobileMenuToggle(!openMenu))

  return (
    <div className={styles.navWrapper}>
      <div className={styles.navContainer}>
        <div className={styles.navBody}>
          <NavMenu />

          <img
            src={openMenu ? close : menu}
            className={styles.navMobileMenuOpenButton}
            alt="menu"
            onClick={() => handleClick()}
          />
          <NavMobileMenu openMenu={openMenu} handleClick={handleClick} />
          <div className={styles.navLogo}>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
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
