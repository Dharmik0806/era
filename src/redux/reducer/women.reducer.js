import * as ActionType from '../ActionType'

const initialState = {
    womenData: [],
    isLoading: false,
    errore: null

}

export const womenReducer = (state = initialState, action) => {
    // console.log(action.payload, state.womenData);
    switch (action.type) {
        case ActionType.WOMEN_GET_DATA:
            return {
                ...state,
                womenData: action.payload,
                isLoading : false
            }

        case ActionType.WOMEN_POST_DATA:
            return {
                ...state,
                womenData: state.womenData.concat(action.payload)
            }

        case ActionType.WOMEN_PUT_DATA:

            let data = state.womenData.map((d, i) => {
                if (d.id === action.payload.id) {
                    return action.payload
                } else {
                    return d
                }
            })
            return {
                ...state,
                womenData: data
            }

        case ActionType.WOMEN_DELETE_DATA:
            let a;
            let finData = state.womenData.map((d, i) => {
                if (d.id !== action.payload) {
                    // console.log(d);
                    return d
                } else {
                    a = i
                }
            })

            finData.splice(a, 1);
            console.log(finData);
            return {
                ...state,
                womenData: finData

            }

            case ActionType.WOMEN_LOADING :
                return{
                    ...state,
                    isLoading : true
                }
        default:
            return state
    }
}