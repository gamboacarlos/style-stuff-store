import { fireEvent, render, screen } from "@testing-library/react"
import { store, TestWrapper } from "@utils/test"
import { FC } from "react"
import NavBar from "./NavBar"

test("NavBar should render all its elementents", () => {
  render(<NavBar />, { wrapper: TestWrapper as FC })

  screen.getByTestId("nav-menu")
  screen.getByTestId("mobile-nav-menu")
  screen.getByTestId("fav-link")
  screen.getByTestId("bag-button")
})

test("NavBar bag button should set the shopping bag state", () => {
  render(<NavBar />, { wrapper: TestWrapper as FC })
  const bagButton = screen.getByTestId("bag-button")

  fireEvent.click(bagButton)
  expect(store.getState().UI.shoppingBagState).toEqual(true)

  fireEvent.click(bagButton)
  expect(store.getState().UI.shoppingBagState).toEqual(false)
})
