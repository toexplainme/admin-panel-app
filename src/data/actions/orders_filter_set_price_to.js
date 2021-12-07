import { ORDERS_FILTER_SET_PRICE_TO } from "../actions_types";

export function ordersFilterSetPriceToAction (newFilterPriceTo) {
    return {
        type: ORDERS_FILTER_SET_PRICE_TO,
        newFilterPriceTo,
    }
}