export function getSortColumn (appState) {
    return appState.sortReducer.column
}

export function getSortAscending (appState) {
    return appState.sortReducer.ascending
}
