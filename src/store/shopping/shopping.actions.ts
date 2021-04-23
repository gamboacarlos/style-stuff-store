import * as actionTypes from "./actionTypes"
import { Dispatch } from "redux"
import { ProductsArray_type } from "./productsTypes"

export const loadingProducts = (): actionTypes.loadingProducts_int => {
  return {
    type: actionTypes.LOADING_PRODUCTS
  }
}
export const setProductsData = (
  products: ProductsArray_type
): actionTypes.setProductsData_int => {
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

export const fetchData = (subCategory: string) => async (
  dispatch: Dispatch<actionTypes.DispatchFetchAndSetProducts_type>
) => {
  try {
    dispatch(loadingProducts())
    const apiCall = await fetch(
      `https://www.apistorecall.xyz/api/products/category/${subCategory}`
    )
    const response = await apiCall.json()
    dispatch(setProductsData(response))
  } catch (err) {
    console.log(`Something went wrong... ${err}`)
  }
}
