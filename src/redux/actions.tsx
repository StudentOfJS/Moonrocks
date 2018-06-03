import { createAction } from 'typesafe-actions'
import { MOBILE_MENU_CLOSE, MOBILE_MENU_OPEN } from '../constants'

export const openMobileMenu = createAction(`actions/${MOBILE_MENU_OPEN}`, resolve => {
  return () => resolve({ MOBILE_MENU_OPEN })
})
// (menuOpen: boolean) => { type: 'actions/MOBILE_MENU_OPEN'; payload: boolean; }

export const closeMobileMenu = createAction(`actions/${MOBILE_MENU_CLOSE}`, resolve => {
  return () => resolve(MOBILE_MENU_CLOSE)
})
// (menuOpen: boolean) => { type: 'actions/MOBILE_MENU_OPEN'; payload: boolean; }