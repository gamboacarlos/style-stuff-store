import { useDispatch, useSelector } from "react-redux"
import { MainStore } from "@store/store"
import {
  addToBag,
  addToFavorites,
  decreaseQty,
  fetchProducts,
  fetchSingleProduct,
  increaseQty,
  removeFromBag,
  removeFromFavorites,
  setBagTotal,
  setLocalBag,
  setLocalFavorites
} from "@store/shopping/shopping.actions"
import {
  BagItem_int,
  FavoritesItem_int,
  SizeInfo_int
} from "@store/shopping/productsTypes"

// Select states ==============================================================================
const useShoppingReducer = () => {
  const dispatch = useDispatch()
  const { products, bag, favorites, bagTotal, currentProduct } = useSelector(
    (state: MainStore) => state.shopping
  )

  // Dispatch fetch products ==================================================================
  const handleDispatchFetchProducts = (prod: string) => dispatch(fetchProducts(prod))

  // Dispatch fetch single product ============================================================
  const handleDispatchFetchSingleProduct = (id: string) =>
    dispatch(fetchSingleProduct(id))

  // Dispatch add to bag ======================================================================
  const handleDispatchAddToBag = (id: number, sizeInfo: SizeInfo_int) =>
    dispatch(addToBag(id, sizeInfo))

  // Dispatch set local bag ===================================================================
  const handleDispatchSetLocalBag = (item: BagItem_int[]) => dispatch(setLocalBag(item))

  // Dispatch set local favorites =============================================================
  const handleDispatchSetLocalFavorites = (item: FavoritesItem_int[]) =>
    dispatch(setLocalFavorites(item))

  // Dispatch set bag total ===================================================================
  const handleDispatchSetBagTotal = () => dispatch(setBagTotal())

  // Dispatch remove from bag =================================================================
  const handleDispatchRemoveFromBag = (id: string) => dispatch(removeFromBag(id))

  // Dispatch increase quantity ===============================================================
  const handleDispatchIncreaseQty = (id: string) => dispatch(increaseQty(id))

  // Dispatch decrease quantity ===============================================================
  const handleDispatchDecreaseQty = (id: string) => dispatch(decreaseQty(id))

  // Dispatch add to favorites ================================================================
  const handleDispatchAddToFavorites = (id: number) => dispatch(addToFavorites(id))

  // Dispatch remove from favorites ===========================================================
  const handleDispatchRemoveFromFavorites = (id: number) =>
    dispatch(removeFromFavorites(id))

  return {
    products,
    bag,
    favorites,
    bagTotal,
    currentProduct,
    handleDispatchFetchProducts,
    handleDispatchFetchSingleProduct,
    handleDispatchSetLocalBag,
    handleDispatchSetLocalFavorites,
    handleDispatchSetBagTotal,
    handleDispatchRemoveFromBag,
    handleDispatchIncreaseQty,
    handleDispatchDecreaseQty,
    handleDispatchRemoveFromFavorites,
    handleDispatchAddToBag,
    handleDispatchAddToFavorites
  }
}

export default useShoppingReducer
