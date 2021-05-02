import { fireEvent, prettyDOM, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import { BagItem } from "@components/molecules"
import TestingWrapper from "@utils/test/TestingWrapper"
import { FC } from "react"
import { testProductBagItem } from "@utils/test"

// Test ============================================================================
test("BagItem component renders name correctly", () => {
  const { getByText } = render(<BagItem data={testProductBagItem} />, {
    wrapper: TestingWrapper as FC
  })
  getByText("Green Overhead Jacket")
  getByText("XL")
  getByText("5")
})
