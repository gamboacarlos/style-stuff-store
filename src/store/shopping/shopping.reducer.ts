import { ProductsArray } from "@interfaces/interfaces"
import * as actionTypes from "./actionTypes"

interface State {
  products: ProductsArray
  cart: ProductsArray
}

const initialState = {
  products: [],
  cart: []
}

const shoppingReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCTS_DATA:
      return { ...state, products: action.payload }
    case actionTypes.ADD_TO_CART:
      return {}
    case actionTypes.REMOVE_FROM_CART:
      return {}
    default:
      return state
  }
}
export default shoppingReducer
