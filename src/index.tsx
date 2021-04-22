import { render } from "react-dom"
import App from "./App"
import "./globalStyles/globals.scss"
import { Provider } from "react-redux"
import mainStore from "@store/store"

render(
  <Provider store={mainStore}>
    <App />
  </Provider>,
  document.getElementById("root")
)
