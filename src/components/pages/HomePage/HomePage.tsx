/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "@globals/App.module.scss"
import { FC, useEffect } from "react"
import { NavBar, ProductsListing } from "@components/organisms"
import { useDispatch, useSelector } from "react-redux"
import { fetchData } from "@store/shopping/shopping.actions"
import { MainStore } from "@store/store"

const HomePage: FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchData("Parka"))
  }, [])

  const data = useSelector((state: MainStore) => state.shopping.products)

  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <ProductsListing data={data} />
      </div>
    </>
  )
}

export default HomePage
