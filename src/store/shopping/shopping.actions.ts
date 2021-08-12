import * as actionTypes from "./actionTypes"
import { Dispatch } from "redux"
import { BagItem_int, Product_int, SizeInfo_int } from "./productsTypes"

export const loadingProducts = (): actionTypes.loadingProducts_int => {
  return {
    type: actionTypes.LOADING_PRODUCTS
  }
}
export const setProductsData = (
  products: Product_int[]
): actionTypes.setProductsData_int => {
  return {
    type: actionTypes.SET_PRODUCTS_DATA,
    payload: products
  }
}
export const setCurrentProduct = (
  product: Product_int[]
): actionTypes.setCurrentProduct_int => {
  return {
    type: actionTypes.SET_CURRENT_PRODUCT,
    payload: product
  }
}
export const addToBag = (
  id: number,
  sizeInfo: SizeInfo_int
): actionTypes.addToBag_int => {
  return {
    type: actionTypes.ADD_TO_BAG,
    payload: {
      id: id,
      sizeInfo: {
        variant_id: sizeInfo.variant_id,
        size: sizeInfo.size
      }
    }
  }
}
export const setLocalBag = (localItems: BagItem_int[]): actionTypes.setLocalBag_int => {
  return {
    type: actionTypes.SET_LOCAL_BAG,
    payload: localItems
  }
}
export const removeFromBag = (id: string): actionTypes.removeFromBag_int => {
  return {
    type: actionTypes.REMOVE_FROM_BAG,
    payload: id
  }
}
export const increaseQty = (id: string): actionTypes.increaseQty_int => {
  return {
    type: actionTypes.INCREASE_QTY,
    payload: id
  }
}
export const decreaseQty = (id: string): actionTypes.decreaseQty_int => {
  return {
    type: actionTypes.DECREASE_QTY,
    payload: id
  }
}
export const setBagTotal = (): actionTypes.setBagTotal_int => {
  return {
    type: actionTypes.SET_BAG_TOTAL
  }
}

export const fetchProducts = (subCategory: string) => async (
  dispatch: Dispatch<actionTypes.DispatchFetchAndSetProducts_type>
): Promise<void> => {
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
): Promise<void> => {
  try {
    dispatch(loadingProducts())
    const apiCall = await fetch(`https://www.apistorecall.xyz/api/products/${id}`)
    const response = await apiCall.json()
    dispatch(setCurrentProduct(response))
  } catch (err) {
    console.log(`Something went wrong... ${err}`)
  }
}
