import { combineReducers } from "redux"
import shoppingReducer from "./shopping/shopping.reducer"
import interfaceReducer from "./interface/interface.reducer"

const rootReducer = combineReducers({
  shopping: shoppingReducer,
  interface: interfaceReducer
})

export default rootReducer
