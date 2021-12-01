import { ORDERS_FILTER_SET_STATUS } from "../actions_types";

export function ordersFilterSetStatusAction (newFilterStatus) {
    return {
        type: ORDERS_FILTER_SET_STATUS,
        newFilterStatus,
    }
}