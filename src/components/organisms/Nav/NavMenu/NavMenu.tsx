/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react"
import styles from "./NavMenu.module.scss"
import categories from "@utils/categories.json"
import { Link } from "react-router-dom"
import { Typography } from "@components/atoms"

const NavMenu: FC = () => {
  return (
    <div className={styles.navMenuWrapper}>
      {categories.map((cat) => {
        return (
          <div className={styles.navDropDownContainer} key={cat.id}>
            <Typography variant="sAnchor">{cat.label}</Typography>
            <ul className={styles.navMenuDropDown}>
              {cat.subCategories.map((scat: any) => {
                return (
                  <Link to={scat.link} key={scat.id}>
                    <li>{scat.label}</li>
                  </Link>
                )
              })}
            </ul>
          </div>
        )
      })}
    </div>
  )
}

export default NavMenu
