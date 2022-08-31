import { RouteComponentProps, withRouter } from "react-router"
import { FC, useEffect } from "react"
import { ProductsListing } from "../organisms"
import FilterBar from "@components/organisms/Nav/FilterBar/FilterBar"
import { Container } from "@components/atoms"
import { MatchParams } from "src/types/commonTypes"
import useShoppingReducer from "@hooks/useShoppingReducer"

const Category: FC<RouteComponentProps<MatchParams>> = ({ match }) => {
  // Hooks =============================================================================
  const { handleDispatchFetchProducts, products } = useShoppingReducer()
  const { subcategory } = match.params
  useEffect(() => {
    handleDispatchFetchProducts(subcategory)
    window.scrollTo(0, 0)
  }, [subcategory])

  return (
    <>
      <FilterBar subCategoryName={subcategory} />
      <Container>
        <ProductsListing data={products} />
      </Container>
    </>
  )
}

export default withRouter(Category)
