import * as actionTypes from "./actionTypes"

export const mobileMenuToggle = (
  currentState: boolean
): actionTypes.mobileMenuToggle_int => {
  return {
    type: actionTypes.MOBILE_MENU_TOGGLE,
    payload: currentState
  }
}
