import "@testing-library/jest-dom/extend-expect"
import { render } from "@testing-library/react"
import { Typography } from "@components/atoms"
import { prettyDOM } from "@testing-library/dom"

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
  // console.log(prettyDOM(pElement))
})

// // TEST /////////////////////////////////////////
// test("Card renders fields correctly", () => {
//   const { getByTestId } = render(<Card {...product} />)
//   const content = getByTestId("model")
//   expect(content.textContent).toBe("Performance D.O.N. Issue 1 GCA")
// })
