// Mobile menu toggle ////////////////////////////////////////
export const MOBILE_MENU_TOGGLE = "MOBILE_MENU_TOGGLE"
export interface mobileMenuToggle_int {
  type: typeof MOBILE_MENU_TOGGLE
  payload: boolean
}

// UI handler types ////////////////////////////////////////
export type UIStateControl_type = mobileMenuToggle_int
