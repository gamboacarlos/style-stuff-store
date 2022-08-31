import {
  BagItem_int,
  Product_int,
  SizeInfo_int,
  FavoritesItem_int
} from "./productsTypes"

// Loading products action type and interface =========================================
export const LOADING_PRODUCTS = "LOADING_PRODUCTS"
export interface loadingProducts_int {
  type: typeof LOADING_PRODUCTS
}

// Fetch data action type and interface ===============================================
export const FETCH_PRODUCTS = "FETCH_PRODUCTS"
export interface fetchProducts_int {
  type: typeof FETCH_PRODUCTS
  payload: string
}

// Set products action type and interface =============================================
export const SET_PRODUCTS_DATA = "SET_PRODUCTS_DATA"
export interface setProductsData_int {
  type: typeof SET_PRODUCTS_DATA
  payload: Product_int[]
}

// Set current product action type and interface ======================================
export const SET_CURRENT_PRODUCT = "SET_CURRENT_PRODUCT"
export interface setCurrentProduct_int {
  type: typeof SET_CURRENT_PRODUCT
  payload: Product_int[]
}

// Get products fail action type and interface ========================================
export const GET_PRODUCTS_FAIL = "GET_PRODUCTS_FAIL"
export interface getProductsFail_int {
  type: typeof GET_PRODUCTS_FAIL
}

// Add to cart action type and interface ==============================================
export const ADD_TO_BAG = "ADD_TO_BAG"
export interface addToBag_int {
  type: typeof ADD_TO_BAG
  payload: {
    id: number
    sizeInfo: SizeInfo_int
  }
}
// Send shopping bag data to localStorage action type and interface ===================
export const SET_LOCAL_BAG = "SET_LOCAL_BAG"
export interface setLocalBag_int {
  type: typeof SET_LOCAL_BAG
  payload: BagItem_int[]
}

// Remove from cart action type and interface =========================================
export const REMOVE_FROM_BAG = "REMOVE_FROM_BAG"
export interface removeFromBag_int {
  type: typeof REMOVE_FROM_BAG
  payload: string
}

// Add to favorites action type and interface =========================================
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES"
export interface addToFavorites_int {
  type: typeof ADD_TO_FAVORITES
  payload: {
    id: number
  }
}
// Send favorites data to localStorage action type and interface ======================
export const SET_LOCAL_FAVORITES = "SET_LOCAL_FAVORITES"
export interface setLocalFavorites_int {
  type: typeof SET_LOCAL_FAVORITES
  payload: FavoritesItem_int[]
}

// Remove from favorites action type and interface ====================================
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES"
export interface removeFromFavorites_int {
  type: typeof REMOVE_FROM_FAVORITES
  payload: number
}

// Increase quantity type and interface ===============================================
export const INCREASE_QTY = "INCREASE_QTY"
export interface increaseQty_int {
  type: typeof INCREASE_QTY
  payload: string
}

// Decrease quantity type and interface ===============================================
export const DECREASE_QTY = "DECREASE_QTY"
export interface decreaseQty_int {
  type: typeof DECREASE_QTY
  payload: string
}
// Set bag total type and interface ===================================================
export const SET_BAG_TOTAL = "SET_BAG_TOTAL"
export interface setBagTotal_int {
  type: typeof SET_BAG_TOTAL
}

// Fetch and dispatch handler type ====================================================
export type DispatchFetchAndSetProducts_type =
  | loadingProducts_int
  | setProductsData_int
  | setCurrentProduct_int
  | increaseQty_int
  | decreaseQty_int
  | getProductsFail_int
  | addToBag_int
  | removeFromBag_int
  | setLocalBag_int
  | setBagTotal_int
  | addToFavorites_int
  | setLocalFavorites_int
  | removeFromFavorites_int
