import { FC } from "react"
import { ProductsListing } from "@components/organisms"
import "@testing-library/jest-dom"
import { TestWrapper } from "@utils/test"
import Container from "./Container"
import { render, screen } from "@testing-library/react"
import { productListingTestData } from "@utils/test/productListingTestData"

test("container should receive children element properly", () => {
  render(
    <Container>
      <ProductsListing data={productListingTestData} />
    </Container>,
    { wrapper: TestWrapper as FC }
  )
  const productList = screen.getByTestId("prod-list")
  expect(productList).toBeInTheDocument()

  const productCards = screen.getAllByTestId("prod-card")
  expect(productCards.length).toEqual(10)
})
