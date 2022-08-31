import { MainStore } from "@store/store"
import {
  mobileMenuToggle,
  selectSizeToggle,
  shoppingBagToggle
} from "@store/UI/UI.actions"
import { useDispatch, useSelector } from "react-redux"

const useUIReducer = () => {
  const dispatch = useDispatch()

  // Select states ====================================================================================
  const { mobileMenuState, selectSizeState, shoppingBagState } = useSelector(
    (state: MainStore) => state.UI
  )

  // Dispatch shopping bag toggle =====================================================================
  const handleDispatchShoppingBagToggle = (state: boolean) =>
    dispatch(shoppingBagToggle(state))

  // Dispatch select size toggle ======================================================================
  const handleDispatchSelectSizeToggle = (size: string, id: string) =>
    dispatch(selectSizeToggle(size, id))

  // Dispatch mobile toggle ===========================================================================
  const handleDispatchMobileToggle = () => {
    dispatch(shoppingBagToggle(false))
    dispatch(mobileMenuToggle(!mobileMenuState))
  }

  // Dispatch bag toggle ==============================================================================
  const handleDispatchMobileBagToggle = () => {
    dispatch(mobileMenuToggle(false))
    dispatch(shoppingBagToggle(!shoppingBagState))
  }

  // Dispatch go to favorites =========================================================================
  const handleDispatchGoToFavorites = () => {
    dispatch(mobileMenuToggle(false))
    dispatch(shoppingBagToggle(false))
  }

  return {
    mobileMenuState,
    selectSizeState,
    shoppingBagState,
    handleDispatchShoppingBagToggle,
    handleDispatchSelectSizeToggle,
    handleDispatchMobileToggle,
    handleDispatchMobileBagToggle,
    handleDispatchGoToFavorites
  }
}

export default useUIReducer
