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
  variant_id: string
  size: string
  id: string
  in_stock: number
}
export type ProductMainImage_type = {
  image_270x270: string
  image_400x400: string
  image_780x780: string
}
export type ProductImages_type = {
  [index: number]: {
    image_270x270: string
    image_400x400: string
    image_780x780: string
  }
}
export type ProductStockInfo_type = {
  price: number
}

// Product interface /////////////////////////////////////////////////////////////////
export interface Product_int {
  id: number
  name: string
  product: ProductInfo_type
  collections: ProductCollections_type
  color: ProductColor_type
  variant_size: ProductCurrentSize_type
  sizes: ProductVariantSizes_type[]
  product_image: ProductMainImage_type
  product_images: ProductImages_type
  stock_info: ProductStockInfo_type
}

// Shopping Bag interface /////////////////////////////////////////////////////////////////
export interface BagItem_int {
  name: string
  price: number
  image: string
  id: number
  variant_id: string
  size: string
  qty: number
}

// Size info interface /////////////////////////////////////////////////////////////////
export interface SizeInfo_int {
  variant_id: string
  size: string
}
