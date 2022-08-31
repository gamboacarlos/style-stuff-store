import { SizeInfo_int } from "@store/shopping/productsTypes"
import * as actionTypes from "./actionTypes"

interface InitialState {
  mobileMenuState: boolean
  selectSizeState: Partial<SizeInfo_int>
  shoppingBagState: boolean
}
const initialState: InitialState = {
  mobileMenuState: false,
  selectSizeState: {},
  shoppingBagState: false
}
const UIReducer = (
  state = initialState,
  action: actionTypes.UIStateControl_type
): InitialState => {
  switch (action.type) {
    case actionTypes.MOBILE_MENU_TOGGLE:
      return { ...state, mobileMenuState: action.payload }
    case actionTypes.SELECT_SIZE_TOGGLE:
      return { ...state, selectSizeState: { ...action.payload } }
    case actionTypes.SHOPPING_BAG_TOGGLE:
      return { ...state, shoppingBagState: action.payload }
    default:
      return state
  }
}

export default UIReducer
