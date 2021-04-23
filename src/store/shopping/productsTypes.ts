// Product elements types /////////////////////////////////////////////////////////////////
export type ProductInfo_type = {
  id: number
  name: string
  category_name: string
}
export type ProductCollections_type = {
  [index: number]: string
}
export type ProductColor_type = {
  raw_value: string
  display_value: string
  color_group: {
    display_value: string
    hexcolor: string
  }
}
export type ProductCurrentSize_type = {
  id: string
  raw_value: string
  display_value: string
}
export type ProductVariantSizes_type = {
  [index: number]: {
    variant_id: string
    size: string
    id: string
    in_stock: number
  }
}
export type ProductMainImage_type = {
  image_270x270: string
  image_400x400: string
  image_540x540: string
}
export type ProductImages_type = {
  [index: number]: {
    image_270x270: string
    image_400x400: string
    image_540x540: string
  }
}
export type ProductStockInfo_type = {
  price: number
}

// Product type /////////////////////////////////////////////////////////////////
export type Product_type = {
  product: ProductInfo_type
  collections: ProductCollections_type[]
  color: ProductColor_type
  variant_size: ProductCurrentSize_type
  sizes: ProductVariantSizes_type[]
  product_image: ProductMainImage_type
  product_images: ProductImages_type[]
  stock_info: ProductStockInfo_type
}
export type ProductsArray_type = {
  [index: number]: Product_type
}
