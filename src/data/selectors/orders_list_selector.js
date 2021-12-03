import { sortBy } from 'lodash'
import { getSortAscending, getSortColumn } from "./sort_selector";

export function getOrdersList(appState) {   
    return appState.ordersListReducer.ordersList;
}

export function getResultOrders(appState) {

    const { 
        filterOrderOrFio,
        filterDateFrom,
        filterDateTo,
        filterStatus,
        filterPriceFrom,
        filterPriceTo } = appState.filterReducer;

    const column = getSortColumn(appState)
    const ascending = getSortAscending(appState)
    
    let list = getOrdersList(appState)

    list = list.filter((d) => (
        
        (d.name.toLowerCase().includes(filterOrderOrFio.toLowerCase()) || d.id.toString().startsWith(filterOrderOrFio.toString())) &&

        (d.sum >= filterPriceFrom && d.sum <= filterPriceTo) &&

        ((new Date((d.created.split(',')[0]).split('.')[2], (d.created.split(',')[0]).split('.')[1]-1, (d.created.split(',')[0]).split('.')[0]) >=
          new Date((filterDateFrom).split('-')[0], (filterDateFrom).split('-')[1]-1, (filterDateFrom).split('-')[2])) &&

        (new Date((d.created.split(',')[0]).split('.')[2], (d.created.split(',')[0]).split('.')[1]-1, (d.created.split(',')[0]).split('.')[0]) <=
         new Date((filterDateTo).split('-')[0], (filterDateTo).split('-')[1]-1, (filterDateTo).split('-')[2]))) &&
          
        (filterStatus.includes(d.status.toLowerCase()))
        )
        )

    let newList = sortBy(list, column)
    if (!ascending) {
        newList = newList.reverse();
    }

    return newList
}
