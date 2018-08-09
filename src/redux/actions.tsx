import { action, createAction } from "typesafe-actions";
import { IForm } from "../components/TokenSale/ContactForm";
import { MOBILE_MENU_CLOSE, MOBILE_MENU_OPEN, SEND_FORM } from "../constants";

export const openMobileMenu = createAction(
  `actions/${MOBILE_MENU_OPEN}`,
  resolve => {
    return () => resolve({ MOBILE_MENU_OPEN });
  }
);
// (menuOpen: boolean) => { type: 'actions/MOBILE_MENU_OPEN'; payload: boolean; }

export const closeMobileMenu = createAction(
  `actions/${MOBILE_MENU_CLOSE}`,
  resolve => {
    return () => resolve(MOBILE_MENU_CLOSE);
  }
);
// (menuOpen: boolean) => { type: 'actions/MOBILE_MENU_OPEN'; payload: boolean; }

export const sendForm = (values: IForm) =>
  // tslint:disable-next-line:no-console
  action(SEND_FORM, console.log(values));
