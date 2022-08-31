import { FC } from "react"
import styles from "./NavMobileMenu.module.scss"
import { Typography } from "@components/atoms"
import categories from "@utils/categories.json"
import { Link } from "react-router-dom"

interface Props {
  openMenu: boolean
  handleClick: () => void
}

const SLIDE = {
  left: 0,
  transition: "500ms"
}

const NavMobileMenu: FC<Props> = ({ openMenu, handleClick }) => {
  return (
    <div
      className={styles.navSlideMobileMenu}
      style={openMenu ? SLIDE : {}}
      data-testid="mobile-nav-menu"
    >
      {categories.map((category) => {
        return (
          <div key={category.id} className={styles.mobileMenuAccordionContainer}>
            <input type="checkbox" />
            <Typography variant="pAnchor">{category.label}</Typography>
            <ul className={styles.mobileMenuAccordionBody}>
              {category.subCategories.map((subcategory) => {
                return (
                  <Link
                    to={subcategory.link}
                    key={subcategory.id}
                    onClick={() => handleClick()}
                  >
                    <li>
                      <Typography variant="pTitle">{subcategory.label}</Typography>
                    </li>
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

export default NavMobileMenu
