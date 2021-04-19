import { FC, useState } from "react"
import { Typography } from "../../atoms"
import styles from "./NavBar.module.scss"

const NavBar: FC = () => {

  const [openMenu, setOpenMenu] = useState(false)
  const handleClick = () => setOpenMenu(!openMenu)
  const SLIDE: React.CSSProperties = {
    left: 0,
    transition: "500ms"
  }
  
  return (
    <div className={styles.navWrapper}>
      <div className={styles.navContainer}>
        <div className={styles.navBody}>
          <div className={styles.navMenu}>
            <Typography variant="sTitle" subStyles={{marginRight: "1.5rem", cursor: "pointer"}}>OUTERWEAR</Typography>
            <Typography variant="sTitle" subStyles={{marginRight: "1.5rem", cursor: "pointer"}}>TOPS</Typography>
            <Typography variant="sTitle" subStyles={{marginRight: "1.5rem", cursor: "pointer"}}>LEGWEAR</Typography>
            <Typography variant="sTitle" subStyles={{marginRight: "1.5rem", cursor: "pointer"}}>ACCESORIES</Typography>
          </div>
          <img src={require("../../../../public/images/menu.svg")} className={styles.navMenuOpenButton} alt="menu" onClick={() => handleClick()}/>
          <div className={styles.navMobileMenu} style={openMenu ? SLIDE : {}}>

            <img src={require("../../../../public/images/close.svg")} className={styles.navMenuCloseButton} alt="close" onClick={() => handleClick()}/>  
            <ul>
              <li>probando</li>
              <li>probando</li>
              <li>probando</li>
            </ul>

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
    </div>
  )
}

export default NavBar
