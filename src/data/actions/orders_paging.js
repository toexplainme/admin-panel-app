import { ORDERS_PAGING } from "../actions_types";

export function ordersPagingAction (newCurrentPage) {
    return {
        type: ORDERS_PAGING,
        newCurrentPage
    }
}
