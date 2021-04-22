/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "@globals/App.module.scss"
import { FC, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { NavBar, ProductsListing } from "@components/organisms"

interface TestData {
  [name: string]: any
}

const HomePage: FC = () => {
  const [state, setState] = useState([] as TestData)

  useEffect(() => {
    fetch("https://www.apistorecall.xyz/api/products/category/polos")
      .then((res) => res.json())
      .then((json) => setState(json))
  }, [])

  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <ProductsListing data={state} />
      </div>
    </>
  )
}

export default HomePage
