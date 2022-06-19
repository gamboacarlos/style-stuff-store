import "@testing-library/jest-dom/extend-expect"
import { render } from "@testing-library/react"
import { Typography } from "@components/atoms"

// Test ============================================================================
test("Typography renders the children prop correctly", () => {
  const { getByText } = render(<Typography>Testing text</Typography>)
  getByText("Testing text")
})

// Test ============================================================================
test("Typography renders the variant prop correctly", () => {
  const { container } = render(<Typography variant="tTitle">testing text</Typography>)
  const pElement = container.querySelector("p")
  expect(pElement).toHaveClass("tertiaryTitle")
})
