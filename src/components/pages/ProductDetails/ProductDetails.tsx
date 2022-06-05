/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useEffect } from "react"
import { withRouter } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { MainStore } from "@store/store"
import { addToFavorites, fetchSingleProduct } from "@store/shopping/shopping.actions"
import { Button, Container } from "@components/atoms"
import { ImageGallery } from "@components/molecules"
import { AddToBagSection } from "@components/organisms"
import styles from "./ProductDetails.module.scss"

const ProductDetails: FC = (props: any) => {
  const { id } = props.match.params
  const dispatch = useDispatch()
  const data = useSelector((state: MainStore) => state.shopping.currentProduct)

  useEffect(() => {
    dispatch(fetchSingleProduct(id))
    window.scrollTo(0, 0)
  }, [id])

  return (
    <Container marginTop="7rem">
      {data.map((product) => {
        return (
          <div className={styles.ProductInfoWrapper} key={product.id}>
            <ImageGallery images={product.product_images} />
            <AddToBagSection data={product} />
          </div>
        )
      })}
    </Container>
  )
}

export default withRouter(ProductDetails)
