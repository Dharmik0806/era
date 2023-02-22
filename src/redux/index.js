import { combineReducers } from "redux";
import { counterReducer } from "./reducer/counter.reducer";
import { medicineReducer } from "./reducer/medicine.reducer";
import { WatchReducer } from "./reducer/watch.reducer";


export const routeReducer = combineReducers({
    count : counterReducer,
    medicine : medicineReducer,
    watch : WatchReducer
})