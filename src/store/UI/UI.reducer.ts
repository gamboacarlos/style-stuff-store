import * as actionTypes from "./actionTypes"

interface InitialState {
  mobileMenuState: boolean
  selectSizeState: string
}
const initialState: InitialState = {
  mobileMenuState: false,
  selectSizeState: ""
}
const UIReducer = (
  state = initialState,
  action: actionTypes.UIStateControl_type
): InitialState => {
  switch (action.type) {
    case actionTypes.MOBILE_MENU_TOGGLE:
      return { ...state, mobileMenuState: action.payload }
    case actionTypes.SELECT_SIZE_TOGGLE:
      return { ...state, selectSizeState: action.payload }
    default:
      return state
  }
}

export default UIReducer
