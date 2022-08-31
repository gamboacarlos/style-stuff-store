import * as actionTypes from "./actionTypes"

// Toggle mobile menu state action ==========================================================
export const mobileMenuToggle = (
  currentState: boolean
): actionTypes.mobileMenuToggle_int => {
  return {
    type: actionTypes.MOBILE_MENU_TOGGLE,
    payload: currentState
  }
}

// Toggle select size action ================================================================
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

// Toggle show shopping bag action ==========================================================
export const shoppingBagToggle = (
  currentState: boolean
): actionTypes.shoppingBagToggle_int => {
  return {
    type: actionTypes.SHOPPING_BAG_TOGGLE,
    payload: currentState
  }
}
