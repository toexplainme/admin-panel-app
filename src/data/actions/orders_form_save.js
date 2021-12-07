import { ORDERS_FORM_SAVE } from "../actions_types";

export function ordersFormSaveAction (updatedOrder) {
    return {
        type: ORDERS_FORM_SAVE,
        updatedOrder
    }
}