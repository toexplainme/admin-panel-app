export function getCurrentPage (appState) {
    return appState.pagingReducer.currentPage
}

export function getPagingSize (appState) {
    return appState.pagingReducer.size
}
