import styles from "./ProductsListing.module.scss"
import { FC } from "react"
import { ProductCard } from "@components/molecules"
import { Product_int } from "@store/shopping/productsTypes"

const ProductsListing: FC<{ data: Product_int[] }> = ({ data }) => {
  return (
    <div className={styles.pListingWrapper} data-testid="prod-list">
      {data.map((prod: Product_int) => (
        <ProductCard
          image={prod.product_image.image_540x540}
          key={prod.id}
          id={prod.id}
          name={prod.name}
          price={prod.stock_info.price}
        />
      ))}
    </div>
  )
}

export default ProductsListing
