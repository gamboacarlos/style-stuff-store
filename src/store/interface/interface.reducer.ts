import * as actionTypes from "./actionTypes"

const initialState = {
  mobileMenuState: false,
  mainMenuSwitch: []
}

const interfaceReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.MOBILE_MENU_TOGGLE:
      return { ...state, mobileMenuState: !action.payload }
    default:
      return state
  }
}

export default interfaceReducer
