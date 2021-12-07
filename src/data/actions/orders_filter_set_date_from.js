import { ORDERS_FILTER_SET_DATE_FROM } from "../actions_types";

export function ordersFilterSetDateFromAction (newFilterDateFrom) {

    return {
        type: ORDERS_FILTER_SET_DATE_FROM,
        newFilterDateFrom,
    }
}