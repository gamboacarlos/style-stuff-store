import { FC } from "react"
import styles from "./NavMobileMenu.module.scss"

interface Props {
  openMenu: boolean
  setOpenMenu: (arg0: boolean) => void
}

const SLIDE: React.CSSProperties = {
  left: 0,
  transition: "500ms"
}

const NavMobileMenu: FC<Props> = ({ openMenu, setOpenMenu }) => {
  const handleClick = () => setOpenMenu(!openMenu)

  return (
    <div className={styles.navMobileMenu} style={openMenu ? SLIDE : {}}>
      <img
        src={require("../../../../../public/images/close.svg")}
        className={styles.navMenuCloseButton}
        alt="close"
        onClick={() => handleClick()}
      />
      <ul>
        <li>probando</li>
        <li>probando</li>
        <li>probando</li>
      </ul>
    </div>
  )
}

export default NavMobileMenu
