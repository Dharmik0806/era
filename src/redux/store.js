
import { createStore, applyMiddleware } from "redux"
import { routeReducer } from ".";
import thunk from 'redux-thunk'

// inport link
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const persistConfig = {
    key: 'root',
    storage,
    // blacklist:['men']
}

const persistedReducer = persistReducer(persistConfig, routeReducer)


export const configerStore = () => {

    let store = createStore(persistedReducer, applyMiddleware(thunk))
    let persistor = persistStore(store)

    return {store,persistor};
}

// *****************************

// import { createStore, applyMiddleware  } from "redux"
// import { routeReducer } from ".";
// import thunk from 'redux-thunk'

// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

// import rootReducer from './reducers'

// const persistConfig = {
//     key: 'root',
//     storage,
        // whitelist : "count"
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)


// export const configerStore = () => {
//     let store = createStore(routeReducer, applyMiddleware(thunk))
// let persistor = persistStore(store)

//     return {store,persistor};
// }