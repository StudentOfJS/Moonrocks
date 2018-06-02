import { action } from 'typesafe-actions'
import { MOBILE_MENU } from '../constants'

export const openMobileMenu = (menuOpen: boolean) => action(MOBILE_MENU, menuOpen)
