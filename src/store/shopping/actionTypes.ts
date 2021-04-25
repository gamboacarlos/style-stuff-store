import { ProductsArray_type, Product_type } from "./productsTypes"

// Loading products action type and interface ////////////////////////////////
export const LOADING_PRODUCTS = "LOADING_PRODUCTS"
export interface loadingProducts_int {
  type: typeof LOADING_PRODUCTS
}

// Fetch data action type and interface ////////////////////////////////
export const FETCH_PRODUCTS = "FETCH_PRODUCTS"
export interface fetchProducts_int {
  type: typeof FETCH_PRODUCTS
  payload: string
}

// Set products action type and interface ////////////////////////////////
export const SET_PRODUCTS_DATA = "SET_PRODUCTS_DATA"
export interface setProductsData_int {
  type: typeof SET_PRODUCTS_DATA
  payload: ProductsArray_type
}
// Set current product action type and interface ////////////////////////////////
export const SET_CURRENT_PRODUCT = "SET_CURRENT_PRODUCT"
export interface setCurrentProduct_int {
  type: typeof SET_CURRENT_PRODUCT
  payload: Product_type
}

// Get products fail action type and interface ////////////////////////////////
export const GET_PRODUCTS_FAIL = "GET_PRODUCTS_FAIL"
export interface getProductsFail_int {
  type: typeof GET_PRODUCTS_FAIL
}

// Add to cart fail action type and interface ////////////////////////////////
export const ADD_TO_CART = "ADD_TO_CART"
export interface addToCart_int {
  type: typeof ADD_TO_CART
}

// Remove from cart fail action type and interface ////////////////////////////////
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"
export interface removeFromCart_int {
  type: typeof REMOVE_FROM_CART
}

// Fetch and dispatch handler type ////////////////////////////////
export type DispatchFetchAndSetProducts_type =
  | loadingProducts_int
  | setProductsData_int
  | setCurrentProduct_int
  | getProductsFail_int
  | addToCart_int
  | removeFromCart_int
