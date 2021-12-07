import ordersList from '../../data/Orders.json';
import { ORDERS_FORM_SAVE, ORDERS_FORM_ITEM_CLICK } from '../actions_types';

const initState = {
    ordersList: ordersList,
    isExpandedForm: false
}

export function ordersListReducer(initialState = initState, action) {
    switch (action.type) {   
        case ORDERS_FORM_ITEM_CLICK: { 
            return {
                ...initialState,
                isExpandedForm: true,
            }
        }
            case ORDERS_FORM_SAVE: { 
                const updatedOrder = action.updatedOrder
                const newState = {...initialState, isExpandedForm: false}
                const foundData = newState.ordersList.find((item) => item.id === updatedOrder.orderId) 

                if (foundData) { 
                    foundData.status = updatedOrder.status 
                    foundData.name = updatedOrder.cName    
                } 
     
            return newState 
            
        }
            default: {
                return initialState
            }
        }
    }