import * as actionTypes from "./actionTypes"
import { Dispatch } from "redux"
import { Product_type } from "./productsTypes"

export const loadingProducts = (): actionTypes.loadingProducts_int => {
  return {
    type: actionTypes.LOADING_PRODUCTS
  }
}
export const setProductsData = (
  products: Product_type[]
): actionTypes.setProductsData_int => {
  return {
    type: actionTypes.SET_PRODUCTS_DATA,
    payload: products
  }
}
export const setCurrentProduct = (
  product: Product_type[]
): actionTypes.setCurrentProduct_int => {
  return {
    type: actionTypes.SET_CURRENT_PRODUCT,
    payload: product
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

export const fetchProducts = (subCategory: string) => async (
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

export const fetchSingleProduct = (id: string) => async (
  dispatch: Dispatch<actionTypes.DispatchFetchAndSetProducts_type>
) => {
  try {
    dispatch(loadingProducts())
    const apiCall = await fetch(`https://www.apistorecall.xyz/api/products/${id}`)
    const response = await apiCall.json()
    dispatch(setCurrentProduct(response))
  } catch (err) {
    console.log(`Something went wrong... ${err}`)
  }
}
