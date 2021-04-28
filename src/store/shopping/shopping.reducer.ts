import * as actionTypes from "./actionTypes"
import { BagItem_int, Product_type } from "./productsTypes"

interface InitialState_int {
  products: Product_type[]
  bag: BagItem_int[]
  currentProduct: Product_type[]
  loading: boolean
}

const initialState: InitialState_int = {
  products: [],
  bag: [],
  currentProduct: [],
  loading: false
}

const shoppingReducer = (
  state = initialState,
  action: actionTypes.DispatchFetchAndSetProducts_type
): InitialState_int => {
  const { bag, currentProduct } = state

  switch (action.type) {
    // Set loading state true /////////////////////////////////////////////////////////////////////
    case actionTypes.LOADING_PRODUCTS:
      return { ...state, loading: true }

    // Add products data to products state ////////////////////////////////////////////////////////
    case actionTypes.SET_PRODUCTS_DATA:
      return { ...state, products: action.payload, loading: false }

    // Set current product in view data to current product state //////////////////////////////////
    case actionTypes.SET_CURRENT_PRODUCT:
      return { ...state, currentProduct: action.payload, loading: false }

    // Add product to shopping bag ////////////////////////////////////////////////////////////////
    case actionTypes.ADD_TO_BAG:
      const { size, variant_id } = action.payload.sizeInfo
      const check = bag.find((prod) => prod.variant_id === variant_id)
      const product = currentProduct.map((prod) => {
        return {
          name: prod.name,
          price: prod.stock_info.price,
          image: prod.product_image.image_270x270,
          id: prod.id,
          variant_id: variant_id,
          size: size,
          qty: 1
        }
      })
      return {
        ...state,
        bag: check
          ? bag.map((prod) =>
              prod.variant_id === variant_id ? { ...prod, qty: prod.qty + 1 } : prod
            )
          : [...bag, ...product]
      }

    // Remove product from shopping bag ///////////////////////////////////////////////////////////
    case actionTypes.REMOVE_FROM_BAG:
      const bagFiltered = bag.filter((prod) => prod.variant_id != action.payload)
      return { ...state, bag: bagFiltered }

    // Increase product quantity //////////////////////////////////////////////////////////////////
    case actionTypes.INCREASE_QTY:
      const prodIncrease = bag.map((prod) =>
        prod.variant_id === action.payload ? { ...prod, qty: prod.qty + 1 } : prod
      )
      return { ...state, bag: prodIncrease }

    // Decrease product quantity //////////////////////////////////////////////////////////////////
    case actionTypes.DECREASE_QTY:
      const prodDecrease = bag.map((prod) =>
        prod.variant_id === action.payload ? { ...prod, qty: prod.qty - 1 } : prod
      )
      return { ...state, bag: prodDecrease }

    default:
      return state
  }
}
export default shoppingReducer
