import { combineReducers } from "redux"
import { filterReducer } from "./filter_reducer"
import { sortReducer } from "./sort_reducer"
import { pagingReducer } from "./paging_reducer"
import { ordersListReducer } from "./orders_list_reducer"

export default combineReducers({
    filterReducer,
    sortReducer,
    pagingReducer,
    ordersListReducer,
})