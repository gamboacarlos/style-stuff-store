import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import { ProductsListing } from "@components/organisms"
import data from "@utils/test/productListingTestProducts.json"
import TestingWrapper from "@utils/test/TestingWrapper"
import { FC } from "react"

test("ProductListing renders products correctly", () => {
  const component = render(<ProductsListing data={data} />, {
    wrapper: TestingWrapper as FC
  })
  component.getByText("Black Seam Sealed M65 Jacket")
})
