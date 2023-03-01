import * as ActionType from "../ActionType"

const initialstate = {
    isLoding: false,
    watch: [],
    errore: null
}

export const WatchReducer = (state = initialstate, action) => {
    console.log("reducer");
    console.log(action, state.watch);

    switch (action.type) {
        case ActionType.WATCH_GET:
            return {
                ...state,
                watch: action.payload,
                isLoding: false,
                errore: null
            }

        case ActionType.WATCH_ADD:
            return {
                ...state,
                watch: state.watch.concat(action.payload)
            }

        case ActionType.WATCH_PUT:

            let finData = state.watch.map((s) => {
                if (s.id === action.payload.id) {
                    return action.payload
                } else {
                    return s
                }
            })

            return {
                ...state,
                watch: finData
            }

        case ActionType.WATCH_DELETE:
            let delData = state.watch.filter((m) => m.id !== action.payload)
            // console.log(delData);

            return {
                ...state,
                watch: delData
            }

        case ActionType.WATCH_LOADING:
            return {
                ...state,
                isLoding: true
            }

        case ActionType.WATCH_ERRORE:
            return {
                ...state,
                isLoding: false,
                errore: action.payload
            }
        default:
            return state
    }
}