/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "./ProductDetails.module.scss"
import { FC, useEffect } from "react"
import { Typography } from "@components/atoms"
import { withRouter } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { MainStore } from "@store/store"
import { fetchSingleProduct } from "@store/shopping/shopping.actions"

const ProductDetails: FC = (props: any) => {
  const { id } = props.match.params
  const dispatch = useDispatch()
  const state = useSelector((state: MainStore) => state.shopping.currentProduct[0])
  useEffect(() => {
    dispatch(fetchSingleProduct(id))
  }, [id])

  return (
    <>
      <div className={styles.container}>
        <div className={styles.ProductInfoWrapper}>
          <div className={styles.productImages}>
            <img src={state.product_images[0].image_780x780} alt="image" />
            <img src={state.product_images[1].image_780x780} alt="image" />
            <img src={state.product_images[2].image_780x780} alt="image" />
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(ProductDetails)
