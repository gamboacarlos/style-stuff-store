import { FC } from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import { ProductsListing } from "@components/organisms"
import data from "@utils/test/productListingTestProducts.json"
import { TestWrapper } from "@utils/test/index"

test("ProductListing should display all the passed elements", () => {
  render(<ProductsListing data={data} />, {
    wrapper: TestWrapper as FC
  })
  const productCards = screen.getAllByTestId("prod-card")
  expect(productCards.length).toEqual(10)
})
