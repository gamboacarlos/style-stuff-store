/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "@globals/App.module.scss"
import { withRouter } from "react-router"
import { FC, useEffect } from "react"
import { ProductsListing } from "../organisms"
import { useSelector, useDispatch } from "react-redux"
import { MainStore } from "@store/store"
import { fetchProducts } from "@store/shopping/shopping.actions"
import FilterBar from "@components/organisms/Nav/FilterBar/FilterBar"

const Category: FC = (props: any) => {
  const { subcategory } = props.match.params
  const dispatch = useDispatch()
  const data = useSelector((state: MainStore) => state.shopping.products)

  useEffect(() => {
    dispatch(fetchProducts(subcategory))
  }, [subcategory])

  return (
    <>
      <FilterBar subCategoryName={subcategory} />
      <div className={styles.container}>
        <ProductsListing data={data} />
      </div>
    </>
  )
}

export default withRouter(Category)
