/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "../../../globalStyles/App.module.scss"
import { FC, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ProductsListing } from "../../organisms"

interface TestData {
  [name: string]: any
}

const HomePage: FC = () => {
  const [state, setState] = useState([] as TestData)

  useEffect(() => {
    fetch("https://www.apistorecall.xyz/api/products/category/outerwear")
      .then((res) => res.json())
      .then((json) => setState(json))
  }, [])

  return (
    <div className={styles.container}>
      <ProductsListing data={state} />
    </div>
  )
}

export default HomePage
