import { ActionType, getType } from 'typesafe-actions'

import * as actions from './actions'
import { IState } from './model';

export type MobileMenuAction = ActionType<typeof actions>

export const initialState: IState = {
  openMobileMenu: false,
};

export default (state: IState = initialState, action: MobileMenuAction) => {
  switch (action.type) {
    case getType(actions.openMobileMenu):
      return Object.assign(state, { openMobileMenu: action.payload })
    default:
      return state
  }
}