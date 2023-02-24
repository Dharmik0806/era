import { combineReducers } from "redux";
import { counterReducer } from "./reducer/counter.reducer";
import { medicineReducer } from "./reducer/medicine.reducer";
import { menReducer } from "./reducer/men.reducer";
import { WatchReducer } from "./reducer/watch.reducer";
import { womenReducer } from "./reducer/women.reducer";


export const routeReducer = combineReducers({
    count : counterReducer,
    medicine : medicineReducer,
    watch : WatchReducer,
    men : menReducer,
    women : womenReducer
})