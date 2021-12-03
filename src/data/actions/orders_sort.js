import { ORDERS_SORT } from "../actions_types";

export function ordersSortAction (col) {
    return {
        type: ORDERS_SORT,
        col,
    }
}