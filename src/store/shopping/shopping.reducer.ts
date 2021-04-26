import * as actionTypes from "./actionTypes"
import { Product_type } from "./productsTypes"

interface InitialState_int {
  products: Product_type[]
  cart: Product_type[]
  currentProduct: Product_type[]
  loading: boolean
}

const initialState: InitialState_int = {
  products: [],
  cart: [],
  currentProduct: [],
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
    case actionTypes.SET_CURRENT_PRODUCT:
      return { ...state, currentProduct: action.payload, loading: false }
    case actionTypes.ADD_TO_CART:
      return state
    case actionTypes.REMOVE_FROM_CART:
      return state
    default:
      return state
  }
}
export default shoppingReducer
