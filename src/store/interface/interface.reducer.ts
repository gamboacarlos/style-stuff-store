import * as actionTypes from "./actionTypes"

interface InitialState {
  mobileMenuState: boolean
}
const initialState: InitialState = {
  mobileMenuState: false
}
const interfaceReducer = (
  state = initialState,
  action: actionTypes.InterfaceStateControl_type
): InitialState => {
  switch (action.type) {
    case actionTypes.MOBILE_MENU_TOGGLE:
      return { ...state, mobileMenuState: action.payload }
    default:
      return state
  }
}

export default interfaceReducer
