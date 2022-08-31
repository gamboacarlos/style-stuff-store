import { FC } from "react"
import { NavMobileMenu, NavMenu, Bag } from "@components/organisms"
import useShoppingReducer from "@hooks/useShoppingReducer"
import useUIReducer from "@hooks/useUIReducer"
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"
import { Icons } from "@components/atoms"
import styles from "./NavBar.module.scss"

const NavBar: FC = () => {
  // Hooks =====================================================================================
  const {
    handleDispatchMobileToggle,
    handleDispatchGoToFavorites,
    handleDispatchMobileBagToggle,
    mobileMenuState: mobileMenu
  } = useUIReducer()
  const { bag: shoppingBag } = useShoppingReducer()
  const history = useHistory()

  // Constants =================================================================================
  const { menu, logo, favs, bag, close } = Icons

  return (
    <div className={styles.navWrapper}>
      <div className={styles.navContainer}>
        <div className={styles.navBody}>
          <NavMenu />
          <img
            src={mobileMenu ? close : menu}
            className={styles.navMobileMenuOpenButton}
            alt="menu"
            onClick={handleDispatchMobileToggle}
          />
          <NavMobileMenu openMenu={mobileMenu} handleClick={handleDispatchMobileToggle} />
          <div className={styles.navLogo}>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className={styles.navUser}>
            <div
              onClick={() => {
                handleDispatchGoToFavorites()
                history.push("/favorites")
              }}
              style={{ cursor: "pointer" }}
            >
              <img src={favs} alt="favs" />
            </div>
            <div
              className={styles.bagIconWrapper}
              onClick={handleDispatchMobileBagToggle}
            >
              <img src={bag} alt="bag" />
              <span>{shoppingBag.length > 0 ? shoppingBag.length : null}</span>
            </div>
          </div>
        </div>
        <Bag />
      </div>
    </div>
  )
}

export default NavBar
