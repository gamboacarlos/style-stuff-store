import { FC, useEffect } from "react"
import { RouteComponentProps, withRouter } from "react-router-dom"
import { Container } from "@components/atoms"
import { ImageGallery } from "@components/molecules"
import { AddToBagSection } from "@components/organisms"
import styles from "./ProductDetails.module.scss"
import { MatchParams } from "src/types/commonTypes"
import useShoppingReducer from "@hooks/useShoppingReducer"

const ProductDetails: FC<RouteComponentProps<MatchParams>> = ({ match }) => {
  // Hooks ===========================================================================
  const { handleDispatchFetchSingleProduct, currentProduct } = useShoppingReducer()
  const { id } = match.params
  useEffect(() => {
    handleDispatchFetchSingleProduct(id)
    window.scrollTo(0, 0)
  }, [id])

  return (
    <Container marginTop="7rem">
      {currentProduct.map((prod) => {
        return (
          <div className={styles.ProductInfoWrapper} key={prod.id}>
            <ImageGallery images={prod.product_images} />
            <AddToBagSection data={prod} />
          </div>
        )
      })}
    </Container>
  )
}

export default withRouter(ProductDetails)
