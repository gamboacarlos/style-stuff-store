import * as actionTypes from "./actionTypes"

interface ProductsArray {
  [index: number]: {
    name: string
  }
}
interface InitialState {
  products: ProductsArray
  cart: ProductsArray
}

const initialState: InitialState = {
  products: [],
  cart: []
}

const shoppingReducer = (state = initialState, action: any): InitialState => {
  switch (action.type) {
    case actionTypes.SET_PRODUCTS_DATA:
      return { ...state, products: action.payload }
    case actionTypes.ADD_TO_CART:
      return state
    case actionTypes.REMOVE_FROM_CART:
      return state
    default:
      return state
  }
}
export default shoppingReducer
