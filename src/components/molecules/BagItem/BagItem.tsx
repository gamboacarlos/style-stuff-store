import { FC, useState } from "react"
import styles from "./BagItem.module.scss"
import { Icons, Typography } from "@components/atoms"
import { BagItem_int } from "@store/shopping/productsTypes"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { decreaseQty, increaseQty, removeFromBag } from "@store/shopping/shopping.actions"
const { close } = Icons
import { motion } from "framer-motion"

interface Props {
  data: BagItem_int
}

const BagItem: FC<Props> = ({ data }) => {
  const dispatch = useDispatch()
  const handleDelete = (id: string) => {
    setTimeout(() => {
      dispatch(removeFromBag(id))
    }, 600)
    return setRemoveAnimation(!removeAnimation)
  }
  const handleIncrease = (id: string) => dispatch(increaseQty(id))
  const handleDecrease = (id: string) => (data.qty > 1 ? dispatch(decreaseQty(id)) : null)
  const [removeAnimation, setRemoveAnimation] = useState(false)

  return (
    <motion.div
      initial={"hide"}
      animate={removeAnimation ? "hide" : "show"}
      variants={{
        show: {
          transform: "translateX(0em)",
          opacity: 1,
          transition: { delay: 0.05, duration: 0.2 }
        },
        hide: {
          transform: "translateX(5em)",
          opacity: 0,
          transition: { delay: 0.05, duration: 0.2 }
        }
      }}
      className={styles.bagItemWrapper}
    >
      <Link to={`/product/details/${data.id}`}>
        <img src={data.image} alt="image" />
      </Link>
      <div className={styles.itemQtyControls}>
        <button
          type="button"
          style={{ cursor: "pointer" }}
          onClick={() => handleIncrease(data.variant_id)}
        >
          +
        </button>
        <Typography>{data.qty}</Typography>
        <button
          type="button"
          style={{ cursor: "pointer" }}
          onClick={() => handleDecrease(data.variant_id)}
        >
          -
        </button>
      </div>
      <div className={styles.bagItemInfo}>
        <Typography variant="sTitle">{data.name}</Typography>
        <Typography variant="span">{`€‌ ${data.price}`}</Typography>
        <Typography>{data.size}</Typography>
      </div>
      <div className={styles.itemRemoveControl}>
        <img src={close} alt="X" onClick={() => handleDelete(data.variant_id)} />
      </div>
    </motion.div>
  )
}

export default BagItem
