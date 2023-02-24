import * as  ActionType from "../ActionType"

const initialState = {
    isLoder: false,
    menData: [],
    error: null
}

export const menReducer = (state = initialState, action) => {
    console.log(action.type, state);
    console.log(action);
    switch (action.type) {
        case ActionType.MEN_GET_DATA:
            return {
                ...state,
                menData: action.payload,
                isLoder : false
            }

        case ActionType.MEN_POST_DATA:
            return {
                ...state,
                menData: state.menData.concat(action.payload)
            }

        case ActionType.MEN_DELETE_DATA:
            let data = state.menData.filter((d) => d.id !== action.payload);

            return {
                ...state,
                menData: data
            }

        case ActionType.MEN_PUT_DATA:

            console.log(action.payload);

            let putData = state.menData.map((d) => {
                if (d.id === action.payload.id) {
                    return action.payload
                } else {
                    return d
                }
            })
            return {
                ...state,
                menData: putData
            }

            case ActionType.MEN_LOADING :
                return{
                    ...state,
                    isLoder : true
                }
        default:
            return state
    }

}