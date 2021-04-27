import { Button, Typography } from "@components/atoms"
import { DeliveryInfo } from "@components/molecules"
import { Product_type } from "@store/shopping/productsTypes"
import { selectSizeToggle } from "@store/UI/UI.actions"
import { FC } from "react"
import { useSelector, useDispatch } from "react-redux"
import styles from "./AddToBagSection.module.scss"
import { MainStore } from "@store/store"

interface Props {
  data: Product_type
}

const AddToBagSection: FC<Props> = ({ data }) => {
  const dispatch = useDispatch()
  const sizeSelectorState = useSelector((state: MainStore) => state.UI.selectSizeState)

  return (
    <div className={styles.addToBagWrapper}>
      <div className={styles.infoBody}>
        <Typography variant="tTitle">{data.name.toUpperCase()}</Typography>
        <Typography variant="span">{`€‌${data.stock_info.price}.00`}</Typography>
        <div className={styles.sizesContainer}>
          {data.sizes.map((variant) => {
            return (
              <div
                key={variant.id}
                className={
                  sizeSelectorState === variant.id || variant.size === "One Size"
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
        <Button>Add to bag</Button>
        <DeliveryInfo />
      </div>
    </div>
  )
}

export default AddToBagSection
