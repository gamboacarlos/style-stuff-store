// Mobile menu toggle open/close ==============================================
export const MOBILE_MENU_TOGGLE = "MOBILE_MENU_TOGGLE"
export interface mobileMenuToggle_int {
  type: typeof MOBILE_MENU_TOGGLE
  payload: boolean
}

// Select size toggle =========================================================
export const SELECT_SIZE_TOGGLE = "SELECT_SIZE_TOGGLE"
export interface selectSizeToggle_int {
  type: typeof SELECT_SIZE_TOGGLE
  payload: {
    size: string
    variant_id: string
  }
}

// Shopping bag toggle open/close =============================================
export const SHOPPING_BAG_TOGGLE = "SHOPPING_BAG_TOGGLE"
export interface shoppingBagToggle_int {
  type: typeof SHOPPING_BAG_TOGGLE
  payload: boolean
}

// UI handler types ===========================================================
export type UIStateControl_type =
  | mobileMenuToggle_int
  | selectSizeToggle_int
  | shoppingBagToggle_int
