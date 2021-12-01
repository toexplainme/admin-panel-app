import { ORDERS_FILTER_SET_ORDER_OR_FIO } from "../actions_types";

export function ordersFilterSetOrderOrFioAction (newFilterOrderOrFio) {
    return {
        type: ORDERS_FILTER_SET_ORDER_OR_FIO,
        newFilterOrderOrFio,
    }
}