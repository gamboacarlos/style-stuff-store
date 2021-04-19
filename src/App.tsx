/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "./globalStyles/App.module.scss"
import { FC, useEffect, useState } from "react"
import ProductsListing from "./components/organisms/ProductsListing/ProductsListing"
import { NavBar } from "./components/organisms"
import Text from "./components/Text"

interface TestData {
  [name:string]: any
}

const App: FC = () => {

  const [state, setState] = useState([]as TestData)

  useEffect(() => {
    fetch("https://www.apistorecall.xyz/api/products/category/shorts")
      .then((res) => res.json())
      .then((json) => setState(json))
  },[])

  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <ProductsListing data={state}/>
      </div>
    </>
  )
}

export default App
