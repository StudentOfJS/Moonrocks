import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { ActionType, getType } from "typesafe-actions";

import * as actions from "./actions";
import { IState } from "./model";

export type Actions = ActionType<typeof actions>;

export const initialState: IState = {
  openMobileMenu: false
};

const menu = (state: IState = initialState, action: Actions) => {
  switch (action.type) {
    case getType(actions.openMobileMenu):
      return Object.assign(state, { openMobileMenu: true });
    case getType(actions.closeMobileMenu):
      return Object.assign(state, { openMobileMenu: false });
    default:
      return state;
  }
};

export default combineReducers({
  form: formReducer,
  menu
});
