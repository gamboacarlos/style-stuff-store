/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "@globals/App.module.scss"
import { withRouter } from "react-router"
import { NavBar } from "../../organisms"
import { FC, useEffect } from "react"
import { ProductsListing } from "../../organisms"
import { useSelector, useDispatch } from "react-redux"
import { MainStore } from "@store/store"
import { fetchData } from "@store/shopping/shopping.actions"

const Category: FC = (props: any) => {
  const { subcategory } = props.match.params
  const dispatch = useDispatch()
  const state = useSelector((state: MainStore) => state.shopping.products)

  useEffect(() => {
    dispatch(fetchData(subcategory))
  }, [subcategory])

  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <ProductsListing data={state} />
      </div>
    </>
  )
}

export default withRouter(Category)
