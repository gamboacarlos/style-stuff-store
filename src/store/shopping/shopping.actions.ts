import * as actionTypes from "./actionTypes"
import { Dispatch } from "redux"

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

export const fetchData = (subCategory: string) => async (dispatch: Dispatch) => {
  try {
    const apiCall = await fetch(
      `https://www.apistorecall.xyz/api/products/category/${subCategory}`
    )
    const response = await apiCall.json()
    dispatch(setProductsData(response))
  } catch (err) {
    console.log(`Something went wrong... ${err}`)
  }
}
