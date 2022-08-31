import * as actionTypes from "./actionTypes"
import { Dispatch } from "redux"
import {
  BagItem_int,
  Product_int,
  SizeInfo_int,
  FavoritesItem_int
} from "./productsTypes"
import "dotenv/config"

// Set products data action =========================================================================
export const setProductsData = (
  products: Product_int[]
): actionTypes.setProductsData_int => {
  return {
    type: actionTypes.SET_PRODUCTS_DATA,
    payload: products
  }
}
// Set current product action =======================================================================
export const setCurrentProduct = (
  product: Product_int[]
): actionTypes.setCurrentProduct_int => {
  return {
    type: actionTypes.SET_CURRENT_PRODUCT,
    payload: product
  }
}
// Add to bag action ================================================================================
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
// Set local bag action ============================================================================
export const setLocalBag = (localItems: BagItem_int[]): actionTypes.setLocalBag_int => {
  return {
    type: actionTypes.SET_LOCAL_BAG,
    payload: localItems
  }
}
// Remove from bag action ==========================================================================
export const removeFromBag = (id: string): actionTypes.removeFromBag_int => {
  return {
    type: actionTypes.REMOVE_FROM_BAG,
    payload: id
  }
}
// Add to favorites action ========================================================================
export const addToFavorites = (id: number): actionTypes.addToFavorites_int => {
  return {
    type: actionTypes.ADD_TO_FAVORITES,
    payload: {
      id: id
    }
  }
}
// Set local favorites action =====================================================================
export const setLocalFavorites = (
  localItems: FavoritesItem_int[]
): actionTypes.setLocalFavorites_int => {
  return {
    type: actionTypes.SET_LOCAL_FAVORITES,
    payload: localItems
  }
}
// Remove from favorites action ===================================================================
export const removeFromFavorites = (id: number): actionTypes.removeFromFavorites_int => {
  return {
    type: actionTypes.REMOVE_FROM_FAVORITES,
    payload: id
  }
}
// Increase product quantity action ===============================================================
export const increaseQty = (id: string): actionTypes.increaseQty_int => {
  return {
    type: actionTypes.INCREASE_QTY,
    payload: id
  }
}
// Decrease product quantity action ===============================================================
export const decreaseQty = (id: string): actionTypes.decreaseQty_int => {
  return {
    type: actionTypes.DECREASE_QTY,
    payload: id
  }
}
// Set bag total price action =====================================================================
export const setBagTotal = (): actionTypes.setBagTotal_int => {
  return {
    type: actionTypes.SET_BAG_TOTAL
  }
}

// Fetch products action ==========================================================================
export const fetchProducts = (subCategory: string) => async (
  dispatch: Dispatch<actionTypes.DispatchFetchAndSetProducts_type>
): Promise<void> => {
  try {
    const apiCall = await fetch(`${process.env.BASE_API_URL}/category/${subCategory}`)
    const response = await apiCall.json()
    dispatch(setProductsData(response))
  } catch (err) {
    console.log(`Something went wrong... ${err}`)
  }
}

// Fetch a single product action ==================================================================
export const fetchSingleProduct = (id: string) => async (
  dispatch: Dispatch<actionTypes.DispatchFetchAndSetProducts_type>
): Promise<void> => {
  try {
    const apiCall = await fetch(`${process.env.BASE_API_URL}/${id}`)
    const response = await apiCall.json()
    dispatch(setCurrentProduct(response))
  } catch (err) {
    console.log(`Something went wrong... ${err}`)
  }
}
