import { ORDERS_PAGING } from '../actions_types'

const initState = {
    currentPage: 1,
    size: 4,
}

export function pagingReducer(initialState = initState, action) {
    switch (action.type) {
        case ORDERS_PAGING: {
            return {
                ...initialState,
                currentPage: action.newCurrentPage + 1,
            }
        }
        default: {
            return initialState;
        }
    }
}
