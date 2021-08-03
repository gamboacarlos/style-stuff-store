import { FC } from "react"
import styles from "./NavBar.module.scss"
import { Link } from "react-router-dom"
import { NavMobileMenu, NavMenu, Bag } from "@components/organisms"
import { Icons } from "@components/atoms"
import { useSelector, useDispatch } from "react-redux"
import { mobileMenuToggle, shoppingBagToggle } from "@store/UI/UI.actions"
import { MainStore } from "@store/store"

// icons ///////////////////////////////////////////////////////////////////////////////
const { menu, logo, favs, bag, close } = Icons

const NavBar: FC = () => {
  const dispatch = useDispatch()
  const openMenu = useSelector((state: MainStore) => state.UI.mobileMenuState)
  const openShoppingBag = useSelector((state: MainStore) => state.UI.shoppingBagState)

  // Mobile menu toggle open/close /////////////////////////////////////////////////////
  const handleMobileToggle = () => {
    dispatch(shoppingBagToggle(false))
    dispatch(mobileMenuToggle(!openMenu))
  }

  // Shopping bag toggle open/close ////////////////////////////////////////////////////
  const handleBagToggle = () => {
    dispatch(mobileMenuToggle(false))
    dispatch(shoppingBagToggle(!openShoppingBag))
  }

  return (
    <div className={styles.navWrapper}>
      <div className={styles.navContainer}>
        <div className={styles.navBody}>
          <NavMenu />
          <img
            src={openMenu ? close : menu}
            className={styles.navMobileMenuOpenButton}
            alt="menu"
            onClick={handleMobileToggle}
          />
          <NavMobileMenu openMenu={openMenu} handleClick={handleMobileToggle} />
          <div className={styles.navLogo}>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className={styles.navUser}>
            {/* <img src={user} alt="user" /> */}
            <img src={favs} alt="favs" />
            <img src={bag} alt="bag" onClick={handleBagToggle} />
          </div>
        </div>
        <Bag />
      </div>
    </div>
  )
}

export default NavBar
