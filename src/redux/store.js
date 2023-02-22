import { createStore, applyMiddleware  } from "redux"
import { routeReducer } from ".";
import thunk from 'redux-thunk'



export const configerStore = () => {
    let store = createStore(routeReducer, applyMiddleware(thunk))

    return store;
}