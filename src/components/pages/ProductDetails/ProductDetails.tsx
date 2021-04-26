/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useEffect } from "react"
import { withRouter } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { MainStore } from "@store/store"
import { fetchSingleProduct } from "@store/shopping/shopping.actions"
import styles from "./ProductDetails.module.scss"
import { Typography } from "@components/atoms"
import { NavBar } from "@components/organisms"

const ProductDetails: FC = (props: any) => {
  const { id } = props.match.params
  const dispatch = useDispatch()
  const data = useSelector((state: MainStore) => state.shopping.currentProduct)

  useEffect(() => {
    dispatch(fetchSingleProduct(id))
  }, [id])

  return (
    <>
      <div className={styles.container}>
        {data.map((product) => {
          return (
            <div className={styles.ProductInfoWrapper} key={product.id}>
              <div className={styles.productImages}>
                <img src={product.product_images[0].image_780x780} alt="image" />
                <img src={product.product_images[1].image_780x780} alt="image" />
                <img src={product.product_images[2].image_780x780} alt="image" />
              </div>
              <div className={styles.infoContainer}>
                <div className={styles.infoBody}>
                  <Typography variant="tTitle">{product.name}</Typography>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default withRouter(ProductDetails)
