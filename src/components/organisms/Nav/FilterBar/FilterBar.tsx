import { Typography } from "@components/atoms"
import { FC } from "react"
import styles from "./FilterBar.module.scss"

interface Props {
  subCategoryName: string
}

const FilterBar: FC<Props> = ({ subCategoryName }) => {
  return (
    <div className={styles.filterBarWrapper}>
      <div className={styles.emptyDiv}></div>
      <div className={styles.subCategoryNameWrapper}>
        <Typography variant="tSubTitle">{subCategoryName.toUpperCase()}</Typography>
      </div>
      <div className={styles.filterWrapper}></div>
    </div>
  )
}

export default FilterBar
