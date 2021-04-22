/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react"
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import { NavBar } from "./components/organisms"
import Category from "./components/pages/Category/Category"
import HomePage from "./components/pages/HomePage/HomePage"

const App: FC = () => {
  return (
    <>
      <Router>
        {/* <NavBar /> */}
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/category/:category/:subcategory" component={Category} />
        </Switch>
      </Router>
    </>
  )
}

export default App
