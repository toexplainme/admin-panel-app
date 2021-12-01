import { ORDERS_FILTER_SET_ORDER_OR_FIO,
         ORDERS_FILTER_SET_DATE_FROM,
         ORDERS_FILTER_SET_DATE_TO,
         ORDERS_FILTER_SET_STATUS,
         ORDERS_FILTER_SET_PRICE_FROM,
         ORDERS_FILTER_SET_PRICE_TO,
         ORDERS_FILTER_CLEAR_ALL } 
from '../actions_types'

const initState = {
    filterOrderOrFio: '',
    filterDateFrom: '1900-0-1',
    filterDateTo: '9999-0-1',
    filterStatus: '',
    filterPriceFrom: 0,
    filterPriceTo: 999999999999,
}

export function filterReducer (initialState = initState, action) {
    
    switch(action.type) {
        case ORDERS_FILTER_SET_ORDER_OR_FIO: { 
            return {
                ...initialState,
                filterOrderOrFio: action.newFilterOrderOrFio,
            }
        }

        case ORDERS_FILTER_SET_DATE_FROM: { 
            return {
                ...initialState,
                filterDateFrom: (action.newFilterDateFrom !== "") ? action.newFilterDateFrom : '1900-0-1',
            }
        }

        case ORDERS_FILTER_SET_DATE_TO: { 
            return {
                ...initialState,
                filterDateTo: (action.newFilterDateTo !== "") ? action.newFilterDateTo : '9999-0-1',
            }
        }

        case ORDERS_FILTER_SET_STATUS: { 
            return {
                ...initialState,
                filterStatus: action.newFilterStatus,
            }
        }

        case ORDERS_FILTER_SET_PRICE_FROM: { 
            return {
                ...initialState,
                filterPriceFrom: (action.newFilterPriceFrom !== "") ? action.newFilterPriceFrom : 0,
            }
        }

        case ORDERS_FILTER_SET_PRICE_TO: { 
            return {
                ...initialState,
                filterPriceTo: (action.newFilterPriceTo !== "") ? action.newFilterPriceTo : 999999999999,
            }
        }

        case ORDERS_FILTER_CLEAR_ALL: { 
            return {
                ...initialState,
                filterOrderOrFio: '',
                filterDateFrom: '1900-0-1',
                filterDateTo: '9999-0-1',
                filterStatus: '',
                filterPriceFrom: 0,
                filterPriceTo: 999999999999,
            }
        }
    
    default: 
        return initialState

    }
}