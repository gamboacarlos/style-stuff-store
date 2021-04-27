/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "@globals/App.module.scss"
import { FC, useEffect } from "react"
import { NavBar, ProductsListing } from "@components/organisms"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "@store/shopping/shopping.actions"
import { MainStore } from "@store/store"
import millerain from "@assets/images/millerain.jpg"
import millerainMobile from "@assets/images/millerainMobile.jpg"
import { Hero } from "@components/molecules"

const HomePage: FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts("Parka"))
  }, [])

  const data = useSelector((state: MainStore) => state.shopping.products)

  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <Hero
          mainImage={millerain}
          mobileImage={millerainMobile}
          title="BRITISH MILLERAIN"
        />
        <ProductsListing data={data} />
      </div>
    </>
  )
}

export default HomePage
