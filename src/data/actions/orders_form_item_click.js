import { ORDERS_FORM_ITEM_CLICK } from "../actions_types";
export function ordersFormItemClickAction (created, status, cName, orderId) 
{
    return {
        type: ORDERS_FORM_ITEM_CLICK,
        created, 
        status, 
        cName,
        orderId
    }
}