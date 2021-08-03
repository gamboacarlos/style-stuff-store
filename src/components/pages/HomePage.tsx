import { FC, useEffect } from "react"
import { NavBar, ProductsListing } from "@components/organisms"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "@store/shopping/shopping.actions"
import { MainStore } from "@store/store"
import { Hero } from "@components/molecules"
import { Container } from "@components/atoms"
import millerain from "@assets/images/millerain.jpg"
import millerainMobile from "@assets/images/millerainMobile.jpg"

const HomePage: FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts("Parka"))
  }, [])

  const data = useSelector((state: MainStore) => state.shopping.products)

  return (
    <>
      <Container>
        <Hero
          mainImage={millerain}
          mobileImage={millerainMobile}
          title="BRITISH MILLERAIN"
        />
        <ProductsListing data={data} />
      </Container>
    </>
  )
}

export default HomePage
