import { FC } from "react"
import { ProductsListing } from "@components/organisms"
import "@testing-library/jest-dom"
import { TestWrapper } from "@utils/test"
import Container from "./Container"
import data from "@utils/test/productListingTestProducts.json"
import { render, screen } from "@testing-library/react"

test("container should receive children element properly", () => {
  render(
    <Container>
      <ProductsListing data={data} />
    </Container>,
    { wrapper: TestWrapper as FC }
  )
  const productList = screen.getByTestId("prod-list")
  expect(productList).toBeInTheDocument()

  const productCards = screen.getAllByTestId("prod-card")
  expect(productCards.length).toEqual(10)
})
