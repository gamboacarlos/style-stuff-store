import * as actionTypes from "./actionTypes"
import { BagItem_int, Product_int, FavoritesItem_int } from "./productsTypes"

interface InitialState_int {
  products: Product_int[]
  bag: BagItem_int[]
  favorites: FavoritesItem_int[]
  bagTotal: number
  currentProduct: Product_int[]
}

export const initialState: InitialState_int = {
  products: [],
  bag: [],
  favorites: [],
  bagTotal: 0,
  currentProduct: []
}

const shoppingReducer = (
  state = initialState,
  action: actionTypes.DispatchFetchAndSetProducts_type
): InitialState_int => {
  const { bag, currentProduct, favorites } = state

  switch (action.type) {
    // Add products data to products state ===============================================================
    case actionTypes.SET_PRODUCTS_DATA:
      return { ...state, products: action.payload }

    // Set current product in view data to current product state =========================================
    case actionTypes.SET_CURRENT_PRODUCT:
      return { ...state, currentProduct: action.payload }

    // Add product to shopping bag =======================================================================
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
          qty: 1,
          total: prod.stock_info.price
        }
      })
      return {
        ...state,
        bag: check
          ? bag.map((prod) =>
              prod.variant_id === variant_id
                ? { ...prod, qty: prod.qty + 1, total: prod.total + prod.price }
                : prod
            )
          : [...bag, ...product]
      }

    // Add bag products to Local Storage ================================================================
    case actionTypes.SET_LOCAL_BAG:
      const localBag = action.payload
      return { ...state, bag: [...localBag] }

    // Remove product from shopping bag =================================================================
    case actionTypes.REMOVE_FROM_BAG:
      const bagFiltered = bag.filter((prod) => prod.variant_id != action.payload)
      return { ...state, bag: bagFiltered }

    // Add product to favorites =========================================================================
    case actionTypes.ADD_TO_FAVORITES:
      const { id } = action.payload
      const checkFavorite = favorites.find((prod) => prod.id === id)
      const favorite = currentProduct.map((prod) => {
        return {
          name: prod.name,
          price: prod.stock_info.price,
          images: prod.product_images,
          id: prod.id
        }
      })
      return {
        ...state,
        favorites: checkFavorite ? favorites : [...favorites, ...favorite]
      }

    // Remove product from favorites ====================================================================
    case actionTypes.REMOVE_FROM_FAVORITES:
      const favoritesFiltered = favorites.filter((fav) => fav.id !== action.payload)
      return { ...state, favorites: favoritesFiltered }

    // Add favorites to Local Storage ===================================================================
    case actionTypes.SET_LOCAL_FAVORITES:
      const localFavorites = action.payload
      return { ...state, favorites: [...localFavorites] }

    // Increase product quantity ========================================================================
    case actionTypes.INCREASE_QTY:
      const prodIncrease = bag.map((prod) =>
        prod.variant_id === action.payload
          ? { ...prod, qty: prod.qty + 1, total: prod.total + prod.price }
          : prod
      )
      return { ...state, bag: prodIncrease }

    // Decrease product quantity ========================================================================
    case actionTypes.DECREASE_QTY:
      const prodDecrease = bag.map((prod) =>
        prod.variant_id === action.payload
          ? { ...prod, qty: prod.qty - 1, total: prod.total - prod.price }
          : prod
      )
      return { ...state, bag: prodDecrease }

    // Set bag total ====================================================================================
    case actionTypes.SET_BAG_TOTAL:
      const totalPrice = bag.reduce((sum, item) => {
        const price = item.total
        return sum + price
      }, 0)
      return { ...state, bagTotal: totalPrice }

    default:
      return state
  }
}
export default shoppingReducer
