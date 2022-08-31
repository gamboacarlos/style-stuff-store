import CheckoutPage from "@components/pages/CheckoutPage/CheckoutPage"
import Layout from "@components/organisms/Layout/Layout"
import ProductDetails from "@components/pages/ProductDetails/ProductDetails"
import { FC } from "react"
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import Category from "./components/pages/Category"
import HomePage from "./components/pages/HomePage"
import Favorites from "@components/pages/Favorites/Favorites"

const App: FC = () => {
  return (
    <>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/category/:category/:subcategory" component={Category} />
            <Route path="/product/details/:id" component={ProductDetails} />
            <Route exact path="/bag/checkout" component={CheckoutPage} />
            <Route exact path="/favorites" component={Favorites} />
          </Switch>
        </Layout>
      </Router>
    </>
  )
}

export default App
