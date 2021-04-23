import * as actionTypes from "./actionTypes"
import { ProductsArray_type } from "./productsTypes"

interface InitialState_int {
  products: ProductsArray_type
  cart: ProductsArray_type
  loading: boolean
}

const initialState: InitialState_int = {
  products: [],
  cart: [],
  loading: false
}

const shoppingReducer = (
  state = initialState,
  action: actionTypes.DispatchFetchAndSetProducts_type
): InitialState_int => {
  switch (action.type) {
    case actionTypes.LOADING_PRODUCTS:
      return { ...state, loading: true }
    case actionTypes.SET_PRODUCTS_DATA:
      return { ...state, products: action.payload, loading: false }
    case actionTypes.ADD_TO_CART:
      return state
    case actionTypes.REMOVE_FROM_CART:
      return state
    default:
      return state
  }
}
export default shoppingReducer
