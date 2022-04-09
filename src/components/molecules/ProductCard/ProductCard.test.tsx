import { render } from "@testing-library/react"
import { ProductCard } from "@components/molecules"
import "@testing-library/jest-dom/extend-expect"
import { testProductCard } from "@utils/test"
import TestingWrapper from "@utils/test/TestingWrapper"
import { FC } from "react"

// Test ============================================================================
test("ProductCard renders product name correctly", () => {
  const { getByText } = render(<ProductCard {...testProductCard} />, {
    wrapper: TestingWrapper as FC
  })
  getByText("Green Overhead Jacket")
})
