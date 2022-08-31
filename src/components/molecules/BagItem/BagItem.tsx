import { FC, useState } from "react"
import useShoppingReducer from "@hooks/useShoppingReducer"
import { Icons, Typography } from "@components/atoms"
import { BagItem_int } from "@store/shopping/productsTypes"
import styles from "./BagItem.module.scss"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { itemAnimationVariants } from "@utils/constants"
const { close } = Icons

const BagItem: FC<{ data: BagItem_int }> = ({ data }) => {
  // Hooks ==================================================================================
  const {
    handleDispatchRemoveFromBag,
    handleDispatchIncreaseQty,
    handleDispatchDecreaseQty
  } = useShoppingReducer()
  const [removeAnimation, setRemoveAnimation] = useState(false)

  // Constants ==============================================================================
  const { name, price, image, id, variant_id, size, qty } = data
  const handleDelete = (id: string) => {
    setTimeout(() => {
      handleDispatchRemoveFromBag(id)
    }, 600)
    return setRemoveAnimation(!removeAnimation)
  }

  return (
    <motion.div
      initial={"hide"}
      animate={removeAnimation ? "hide" : "show"}
      variants={itemAnimationVariants}
      className={styles.bagItemWrapper}
    >
      <Link to={`/product/details/${id}`}>
        <img src={image} alt="image" />
      </Link>
      <div className={styles.itemQtyControls}>
        <button
          type="button"
          style={{ cursor: "pointer" }}
          onClick={() => handleDispatchIncreaseQty(variant_id)}
        >
          +
        </button>
        <Typography>{qty}</Typography>
        <button
          type="button"
          style={{ cursor: "pointer" }}
          onClick={() => {
            qty > 1 ? handleDispatchDecreaseQty(variant_id) : null
          }}
        >
          -
        </button>
      </div>
      <div className={styles.bagItemInfo}>
        <Typography variant="sTitle">{name}</Typography>
        <Typography variant="span">{`€‌ ${price}`}</Typography>
        <Typography>{size}</Typography>
      </div>
      <div className={styles.itemRemoveControl}>
        <img src={close} alt="X" onClick={() => handleDelete(variant_id)} />
      </div>
    </motion.div>
  )
}

export default BagItem
