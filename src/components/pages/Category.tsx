/* eslint-disable @typescript-eslint/no-explicit-any */
import { withRouter } from "react-router"
import { FC, useEffect } from "react"
import { ProductsListing } from "../organisms"
import { useSelector, useDispatch } from "react-redux"
import { MainStore } from "@store/store"
import { fetchProducts } from "@store/shopping/shopping.actions"
import FilterBar from "@components/organisms/Nav/FilterBar/FilterBar"
import { Container } from "@components/atoms"

const Category: FC = (props: any) => {
  const { subcategory } = props.match.params
  const dispatch = useDispatch()
  const data = useSelector((state: MainStore) => state.shopping.products)

  useEffect(() => {
    dispatch(fetchProducts(subcategory))
    window.scrollTo(0, 0)
  }, [subcategory])

  return (
    <>
      <FilterBar subCategoryName={subcategory} />
      <Container>
        <ProductsListing data={data} />
      </Container>
    </>
  )
}

export default withRouter(Category)
