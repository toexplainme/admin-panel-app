import { ORDERS_FILTER_SET_DATE_TO } from "../actions_types";

export function ordersFilterSetDateToAction (newFilterDateTo) {

    return {
        type: ORDERS_FILTER_SET_DATE_TO,
        newFilterDateTo,
    }
}