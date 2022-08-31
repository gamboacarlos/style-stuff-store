import { render } from "@testing-library/react"
import "@testing-library/jest-dom"
import FavoriteItem from "./FavoriteItem"
import { testFavoriteItem, TestWrapper } from "@utils/test"
import { FC } from "react"

test("Favorite should render the passed data properly", () => {
  const { getByTestId } = render(<FavoriteItem data={testFavoriteItem} />, {
    wrapper: TestWrapper as FC
  })
  const name = getByTestId("favName")
  const price = getByTestId("favPrice")

  expect(name.textContent).toEqual(testFavoriteItem.name)
  expect(price.textContent).toEqual(`€‌ ${testFavoriteItem.price}`)
})
