/* eslint-disable @typescript-eslint/no-explicit-any */
import { Footer } from "@components/molecules"
import ProductDetails from "@components/pages/ProductDetails/ProductDetails"
import { FC } from "react"
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import { NavBar } from "./components/organisms"
import Category from "./components/pages/Category"
import HomePage from "./components/pages/HomePage"

interface Props {
  children: React.ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  )
}

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
