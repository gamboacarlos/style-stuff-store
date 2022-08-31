import { render } from "@testing-library/react"
import { ProductCard } from "@components/molecules"
import "@testing-library/jest-dom"
import { testProductCard } from "@utils/test"
import { TestWrapper } from "@utils/test/index"
import { FC } from "react"

// Test ============================================================================
test("ProductCard renders product name correctly", () => {
  const { getByText } = render(<ProductCard {...testProductCard} />, {
    wrapper: TestWrapper as FC
  })
  getByText("Green Overhead Jacket")
})
