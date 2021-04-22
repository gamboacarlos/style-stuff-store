import { ProductsArray } from "@interfaces/interfaces"
import * as actionTypes from "./actionTypes"

export const setProductsData = (products: number) => {
  return {
    type: actionTypes.SET_PRODUCTS_DATA,
    payload: products
  }
}
export const addToCart = (id: number) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: id
  }
}
export const removeFromCart = (id: number) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: id
  }
}

export const fetchData = () => (
  dispatch: (arg0: ProductsArray) => void,
  getState: () => void
) => {
  fetch("https://www.apistorecall.xyz/api/products/category/polos")
    .then((res) => res.json())
    .then((json) => dispatch(setProductsData(json)))
    .catch((err) => console.log(`Something went wrong... ${err}`))
}
