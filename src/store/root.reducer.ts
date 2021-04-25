import { combineReducers } from "redux"
import shoppingReducer from "./shopping/shopping.reducer"
import UIReducer from "./UI/UI.reducer"

const rootReducer = combineReducers({
  shopping: shoppingReducer,
  UI: UIReducer
})

export default rootReducer
