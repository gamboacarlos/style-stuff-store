import shoppingReducer, { initialState } from "./shopping.reducer"
import * as actionTypes from "./actionTypes"
import { productListingTestData } from "@utils/test/productListingTestData"

describe("Shopping reducer test", () => {
  // Test ============================================================================
  test("should return the initial state", () => {
    expect(shoppingReducer(undefined, {} as never)).toEqual(initialState)
  })

  // Test ============================================================================
  test("should handle SET_PRODUCTS_DATA properly", () => {
    const type = actionTypes.SET_PRODUCTS_DATA
    const payload = productListingTestData
    const action = { type, payload }
    const reducerReturnValue = shoppingReducer(
      initialState,
      action as actionTypes.setProductsData_int
    )
    expect(reducerReturnValue.products).toEqual(payload)
  })

  // Test ============================================================================
  test("should handle SET_CURRENT_PRODUCT properly", () => {
    const type = actionTypes.SET_CURRENT_PRODUCT
    const payload = [productListingTestData[0]]
    const action = { type, payload }
    const reducerReturnValue = shoppingReducer(
      initialState,
      action as actionTypes.setCurrentProduct_int
    )
    expect(reducerReturnValue.currentProduct).toEqual(payload)
  })
})
