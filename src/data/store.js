import { createStore } from "redux";
import reducers from "./reducers";
import {devToolsEnhancer} from 'redux-devtools-extension';

const store = createStore(reducers, /* preloadedState, */ devToolsEnhancer({name: 'orders list'}));

export default store;