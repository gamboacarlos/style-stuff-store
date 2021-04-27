/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useEffect } from "react"
import { withRouter } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { MainStore } from "@store/store"
import { fetchSingleProduct } from "@store/shopping/shopping.actions"
import styles from "./ProductDetails.module.scss"
import { Typography } from "@components/atoms"
import { selectSizeToggle } from "@store/UI/UI.actions"

const ProductDetails: FC = (props: any) => {
  const { id } = props.match.params
  const dispatch = useDispatch()
  const data = useSelector((state: MainStore) => state.shopping.currentProduct)
  const sizeSelectorState = useSelector((state: MainStore) => state.UI.selectSizeState)

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
                  <Typography variant="tTitle">{product.name.toUpperCase()}</Typography>
                  <Typography variant="span">{`€‌${product.stock_info.price}.00`}</Typography>
                  <div className={styles.sizesContainer}>
                    {product.sizes.map((variant) => {
                      return (
                        <div
                          key={variant.id}
                          className={
                            sizeSelectorState === variant.id ||
                            variant.size === "One Size"
                              ? styles.sizeBoxUnselected
                              : styles.sizeBoxSelected
                          }
                          onClick={() => dispatch(selectSizeToggle(variant.id))}
                        >
                          <Typography variant="sTitle">{variant.size}</Typography>
                        </div>
                      )
                    })}
                  </div>
                  <button>Add to bag</button>
                  <div className={styles.deliveryInfo}>
                    <div className={styles.infoTitle}>
                      <Typography variant="tSubTitle">{"DELIVERY & RETURNS"}</Typography>
                    </div>
                    <div className={styles.infoParagraph}>
                      <Typography variant="sTitle">Free Worldwide Delivery</Typography>
                      <Typography>Europe - spend over €‌130.00</Typography>
                      <Typography>Rest of World - spend over €‌195.00</Typography>
                    </div>
                    <div className={styles.infoParagraph}>
                      <Typography variant="sTitle">Express Delivery</Typography>
                      <Typography>2-3 day delivery in Europ from €12</Typography>
                    </div>
                    <div className={styles.infoParagraph}>
                      <Typography variant="sTitle">Flat Rate Returns</Typography>
                      <Typography>
                        Flat rate return fee for all international customers. Return
                        within 28 working days after delivery for a refund.
                      </Typography>
                    </div>
                  </div>
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
