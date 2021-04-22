import { createStore, applyMiddleware } from "redux"
import rootReducer from "./root.reducer"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

const mainStore = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export type MainStore = ReturnType<typeof rootReducer>

export default mainStore
