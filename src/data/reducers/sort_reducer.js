import { ORDERS_SORT } from '../actions_types'
import { CREATED_COL } from "../orders_table_column";

const initState = {
    column: CREATED_COL,
    ascending: true,
}

export function sortReducer(initialState = initState, action) {
    switch (action.type) {
        case ORDERS_SORT: {
            return {
                ...initialState,
                column: action.column,
                ascending: initialState.column !== action.column ? true : !initialState.ascending,
            }
        }
        default: {
            return initialState;
        }
    }
}
