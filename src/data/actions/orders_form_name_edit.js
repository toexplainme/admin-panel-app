import { ORDERS_FORM_NAME_EDIT } from "../actions_types";

export function ordersFormNameEditAction (cName) {
    return {
        type: ORDERS_FORM_NAME_EDIT,
        cName
    }
}