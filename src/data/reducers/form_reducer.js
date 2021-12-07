import { ORDERS_FORM_ITEM_CLICK,
         ORDERS_FORM_NAME_EDIT,
         ORDERS_FORM_STATUS_EDIT } 
from '../actions_types'

const initState = {
    created: '',
    status: '',
    cName: '',
    orderId: '',
}

export function formReducer (initialState = initState, action) {
    
    switch(action.type) {
        case ORDERS_FORM_ITEM_CLICK: { 
            const { created, status, cName, orderId } = action;
            return {
                ...initialState,
                created, 
                status, 
                cName,
                orderId,
            }
        }

        case ORDERS_FORM_NAME_EDIT: { 
            return {
                ...initialState,
                cName: action.cName,
            }
        }

        case ORDERS_FORM_STATUS_EDIT: { 
            return {
                ...initialState,
                status: action.status,
            }
        }
    
    default: 
        return initialState

    }
}