import { FC, useEffect } from "react"
import { ProductsListing } from "@components/organisms"
import { Hero } from "@components/molecules"
import { Container } from "@components/atoms"
import millerain from "@assets/images/millerain.jpg"
import millerainMobile from "@assets/images/millerainMobile.jpg"
import useShoppingReducer from "@hooks/useShoppingReducer"

const HomePage: FC = () => {
  // Hooks ==========================================================================
  const { handleDispatchFetchProducts, products } = useShoppingReducer()
  useEffect(() => {
    handleDispatchFetchProducts("Parka")
  }, [])

  return (
    <>
      <Container>
        <Hero
          mainImage={millerain}
          mobileImage={millerainMobile}
          title="BRITISH MILLERAIN"
        />
        <ProductsListing data={products} />
      </Container>
    </>
  )
}

export default HomePage
