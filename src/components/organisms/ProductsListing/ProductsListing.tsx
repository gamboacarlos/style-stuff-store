/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "./ProductsListing.module.scss"
import { FC } from "react"
import ProductCard from "../../molecules/ProductCard/ProductCard"

interface Props {
  [name: string]: any
}

const ProductsListing: FC<Props> = ({ data, loading }) => {
  return (
    <div className={styles.pListingWrapper}>
      {data.map((prod: any) => (
        <ProductCard
          image={prod.product_image.image_540x540}
          key={prod.id}
          id={prod.id}
          name={prod.name}
          price={prod.stock_info.price}
          loading={loading}
        />
      ))}
    </div>
  )
}

export default ProductsListing
