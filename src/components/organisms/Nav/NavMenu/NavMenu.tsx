import { FC } from "react"
import styles from "./NavMenu.module.scss"
import categories from "@utils/categories.json"
import { Link } from "react-router-dom"
import { Typography } from "@components/atoms"
import { Featured } from "@components/molecules"

const NavMenu: FC = () => {
  return (
    <div className={styles.navMenuWrapper} data-testid="nav-menu">
      {categories.map((cat) => {
        return (
          <div className={styles.navDropDownContainer} key={cat.id}>
            <Typography variant="sAnchor">{cat.label}</Typography>
            <div className={styles.navMenuDropDownWrapper}>
              <ul className={styles.navMenuDropDownBody}>
                <div className={styles.dropDownAnchors}>
                  {cat.subCategories.map((subcat) => {
                    return (
                      <li key={subcat.id} className={styles.navMenuAnchor}>
                        <Link to={subcat.link}>
                          <Typography variant="sAnchor">{subcat.label}</Typography>
                        </Link>
                      </li>
                    )
                  })}
                </div>
                <div className={styles.dropDownFeaturedWrapper}>
                  <Typography variant="sTitle">Featured</Typography>
                  <div className={styles.dropDownFeaturedBody}>
                    {cat.featured.map((featured) => {
                      return <Featured {...featured} key={featured.id} />
                    })}
                  </div>
                </div>
              </ul>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default NavMenu
