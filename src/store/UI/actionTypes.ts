// Mobile menu toggle ////////////////////////////////////////
export const MOBILE_MENU_TOGGLE = "MOBILE_MENU_TOGGLE"
export interface mobileMenuToggle_int {
  type: typeof MOBILE_MENU_TOGGLE
  payload: boolean
}
// Select size toggle ////////////////////////////////////////
export const SELECT_SIZE_TOGGLE = "SELECT_SIZE_TOGGLE"
export interface selectSizeToggle_int {
  type: typeof SELECT_SIZE_TOGGLE
  payload: string
}

// UI handler types ////////////////////////////////////////
export type UIStateControl_type = mobileMenuToggle_int | selectSizeToggle_int
