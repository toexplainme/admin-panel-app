import { ORDERS_FORM_STATUS_EDIT } from "../actions_types";

export function ordersFormStatusEditAction (status) {
    return {
        type: ORDERS_FORM_STATUS_EDIT,
        status
    }
}