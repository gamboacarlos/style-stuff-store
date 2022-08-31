import { render } from "@testing-library/react"
import "@testing-library/jest-dom"
import FavoriteItem from "./FavoriteItem"
import { testFavoriteItem, TestWrapper } from "@utils/test"

test("Favorite product is rendering the received data properly", () => {
  const { getByTestId } = render(
    <TestWrapper>
      <FavoriteItem data={testFavoriteItem} />
    </TestWrapper>
  )
  const name = getByTestId("favName")
  const price = getByTestId("favPrice")

  expect(name.textContent).toEqual(testFavoriteItem.name)
  expect(price.textContent).toEqual(`€‌ ${testFavoriteItem.price}`)
})
