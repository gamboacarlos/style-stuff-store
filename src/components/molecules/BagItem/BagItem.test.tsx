import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { BagItem } from "@components/molecules"
import { TestWrapper } from "@utils/test/index"
import { FC } from "react"
import { testProductBagItem } from "@utils/test"

// Test ============================================================================
test("BagItem should render the passed name, size and quantity", () => {
  render(<BagItem data={testProductBagItem} />, {
    wrapper: TestWrapper as FC
  })
  screen.getByText(testProductBagItem.name)
  screen.getByText(testProductBagItem.size)
  screen.getByText(testProductBagItem.qty)
})
