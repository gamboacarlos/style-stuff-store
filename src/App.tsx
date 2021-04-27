/* eslint-disable @typescript-eslint/no-explicit-any */
import Layout from "@components/pages/Layout/Layout"
import ProductDetails from "@components/pages/ProductDetails/ProductDetails"
import { FC } from "react"
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import Category from "./components/pages/Category"
import HomePage from "./components/pages/HomePage"

const App: FC = () => {
  return (
    <>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/category/:category/:subcategory" component={Category} />
            <Route path="/product/details/:id" component={ProductDetails} />
          </Switch>
        </Layout>
      </Router>
    </>
  )
}

export default App
