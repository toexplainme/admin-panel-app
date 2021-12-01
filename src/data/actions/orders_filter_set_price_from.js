import { ORDERS_FILTER_SET_PRICE_FROM } from "../actions_types";

export function ordersFilterSetPriceFromAction (newFilterPriceFrom) {
    return {
        type: ORDERS_FILTER_SET_PRICE_FROM,
        newFilterPriceFrom,
    }
}