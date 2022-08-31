import { FC, useEffect } from "react"
import { Button, Typography } from "@components/atoms"
import { DeliveryInfo } from "@components/molecules"
import { Product_int } from "@store/shopping/productsTypes"
import useShoppingReducer from "@hooks/useShoppingReducer"
import useUIReducer from "@hooks/useUIReducer"
import styles from "./AddToBagSection.module.scss"

const AddToBagSection: FC<{ data: Product_int }> = ({ data }) => {
  // Hooks =====================================================================================
  const { handleDispatchAddToBag, handleDispatchAddToFavorites } = useShoppingReducer()
  const { handleDispatchSelectSizeToggle, selectSizeState } = useUIReducer()

  // Effects ===================================================================================
  useEffect(() => {
    handleDispatchSelectSizeToggle(data.sizes[0].size, data.sizes[0].variant_id)
  }, [data])

  return (
    <div className={styles.addToBagWrapper}>
      <div className={styles.infoBody}>
        <Typography variant="tTitle">{data.name.toUpperCase()}</Typography>
        <Typography variant="span">{`€‌ ${data.stock_info.price}`}</Typography>
        <div className={styles.sizesContainer}>
          {data.sizes.map((variant) => {
            return (
              <div
                id="sizeContainer"
                key={variant.id}
                className={
                  selectSizeState.size === variant.size || variant.size === "One Size"
                    ? styles.sizeBoxUnselected
                    : styles.sizeBoxSelected
                }
                onClick={() =>
                  handleDispatchSelectSizeToggle(variant.size, variant.variant_id)
                }
              >
                <Typography variant="sTitle">{variant.size}</Typography>
              </div>
            )
          })}
        </div>
        <div>
          <Button
            onClick={() => handleDispatchAddToBag(data.id, selectSizeState)}
            style={{ marginBottom: "12px" }}
          >
            Add to bag
          </Button>
          <Button
            variant="secondary"
            onClick={() => handleDispatchAddToFavorites(data.id)}
          >
            Add to favorites
          </Button>
        </div>
        <DeliveryInfo />
      </div>
    </div>
  )
}

export default AddToBagSection
