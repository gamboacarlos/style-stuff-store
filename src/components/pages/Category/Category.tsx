/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "../../../globalStyles/App.module.scss"
import { withRouter } from "react-router"
import { NavBar } from "../../organisms"
import { FC, useEffect, useState } from "react"
import { ProductsListing } from "../../organisms"

interface TestData {
  [name: string]: any
}

const Category: FC = (props: any) => {
  const { subcategory } = props.match.params
  const [state, setState] = useState([] as TestData)

  useEffect(() => {
    fetch(`https://www.apistorecall.xyz/api/products/category/${subcategory}`)
      .then((res) => res.json())
      .then((json) => setState(json))
  }, [state])

  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <ProductsListing data={state} />
      </div>
    </>
  )
}

export default withRouter(Category)
