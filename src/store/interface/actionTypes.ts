// Mobile menu toggle ////////////////////////////////////////
export const MOBILE_MENU_TOGGLE = "MOBILE_MENU_TOGGLE"
export interface mobileMenuToggle_int {
  type: typeof MOBILE_MENU_TOGGLE
  payload: boolean
}

// Interface handler types ////////////////////////////////////////
export type InterfaceStateControl_type = mobileMenuToggle_int
