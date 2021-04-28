import * as actionTypes from "./actionTypes"

export const mobileMenuToggle = (
  currentState: boolean
): actionTypes.mobileMenuToggle_int => {
  return {
    type: actionTypes.MOBILE_MENU_TOGGLE,
    payload: currentState
  }
}
export const selectSizeToggle = (
  size: string,
  variant_id: string
): actionTypes.selectSizeToggle_int => {
  return {
    type: actionTypes.SELECT_SIZE_TOGGLE,
    payload: {
      size: size,
      variant_id: variant_id
    }
  }
}
export const shoppingBagToggle = (
  currentState: boolean
): actionTypes.shoppingBagToggle_int => {
  return {
    type: actionTypes.SHOPPING_BAG_TOGGLE,
    payload: currentState
  }
}
