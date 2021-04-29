import { Button, Typography } from "@components/atoms"
import { DeliveryInfo } from "@components/molecules"
import { Product_int } from "@store/shopping/productsTypes"
import { selectSizeToggle } from "@store/UI/UI.actions"
import { FC, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import styles from "./AddToBagSection.module.scss"
import { MainStore } from "@store/store"
import { addToBag } from "@store/shopping/shopping.actions"

interface Props {
  data: Product_int
}

const AddToBagSection: FC<Props> = ({ data }) => {
  const dispatch = useDispatch()
  const sizeSelectorState = useSelector((state: MainStore) => state.UI.selectSizeState)
  const handleSize = (size: string, variant_id: string) => {
    return dispatch(selectSizeToggle(size, variant_id))
  }
  useEffect(() => {
    dispatch(selectSizeToggle(data.sizes[0].size, data.sizes[0].variant_id))
  }, [data])

  return (
    <div className={styles.addToBagWrapper}>
      <div className={styles.infoBody}>
        <Typography variant="tTitle">{data.name.toUpperCase()}</Typography>
        <Typography variant="span">{`€‌${data.stock_info.price}.00`}</Typography>
        <div className={styles.sizesContainer}>
          {data.sizes.map((variant) => {
            return (
              <div
                id="sizeContainer"
                key={variant.id}
                className={
                  sizeSelectorState.size === variant.size || variant.size === "One Size"
                    ? styles.sizeBoxUnselected
                    : styles.sizeBoxSelected
                }
                onClick={() => handleSize(variant.size, variant.variant_id)}
              >
                <Typography variant="sTitle">{variant.size}</Typography>
              </div>
            )
          })}
        </div>
        <Button onClick={() => dispatch(addToBag(data.id, sizeSelectorState))}>
          Add to bag
        </Button>
        <DeliveryInfo />
      </div>
    </div>
  )
}

export default AddToBagSection
