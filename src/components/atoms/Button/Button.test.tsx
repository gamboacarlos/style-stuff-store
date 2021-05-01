import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import { fireEvent } from "@testing-library/dom"
import { Button } from "@components/atoms"

// Test ============================================================================
test("Button renders children prop correctly", () => {
  const { getByText } = render(<Button>Testing text</Button>)
  getByText("Testing text")
})

// Test ============================================================================
test("Button renders onClick prop correctly", () => {
  const mockHandler = jest.fn()
  render(<Button onClick={mockHandler}>Testing text</Button>)
  const button = screen.getByTestId("button")
  fireEvent.click(button)
  fireEvent.click(button)
  expect(mockHandler).toHaveBeenCalledTimes(2)
})
