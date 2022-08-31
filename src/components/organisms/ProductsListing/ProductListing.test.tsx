import { FC } from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import { ProductsListing } from "@components/organisms"
import { TestWrapper } from "@utils/test/index"
import { productListingTestData } from "@utils/test/productListingTestData"

test("ProductListing should display all the passed elements", () => {
  render(<ProductsListing data={productListingTestData} />, {
    wrapper: TestWrapper as FC
  })
  const productCards = screen.getAllByTestId("prod-card")
  expect(productCards.length).toEqual(10)
})
