import { FC } from "react"
import styles from "./BagItem.module.scss"
import { Icons, Typography } from "@components/atoms"
import { BagItem_int } from "@store/shopping/productsTypes"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { decreaseQty, increaseQty, removeFromBag } from "@store/shopping/shopping.actions"
const { close } = Icons

interface Props {
  data: BagItem_int
}

const BagItem: FC<Props> = ({ data }) => {
  const dispatch = useDispatch()
  const handleDelete = (id: string) => dispatch(removeFromBag(id))
  const handleIncrease = (id: string) => dispatch(increaseQty(id))
  const handleDecrease = (id: string) => (data.qty > 1 ? dispatch(decreaseQty(id)) : null)

  return (
    <div className={styles.bagItemWrapper}>
      <Link to={`/product/details/${data.id}`}>
        <img src={data.image} alt="image" />
      </Link>
      <div className={styles.itemQtyControls}>
        <button type="button" onClick={() => handleIncrease(data.variant_id)}>
          +
        </button>
        <Typography>{data.qty}</Typography>
        <button type="button" onClick={() => handleDecrease(data.variant_id)}>
          -
        </button>
      </div>
      <div className={styles.bagItemInfo}>
        <Typography variant="sTitle">{data.name}</Typography>
        <Typography variant="span">{`$${data.price}.00`}</Typography>
        <Typography>{data.size}</Typography>
      </div>
      <div className={styles.itemRemoveControl}>
        <img src={close} alt="X" onClick={() => handleDelete(data.variant_id)} />
      </div>
    </div>
  )
}

export default BagItem
