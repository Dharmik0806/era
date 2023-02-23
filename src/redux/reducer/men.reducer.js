import * as  ActionType from "../ActionType"

const initialState = {
    isLoder: false,
    menData: [],
    error: null
}

export const menReducer = (state = initialState, action) => {
    console.log(action , state);
    console.log(action.payload);
    switch (action.type) {
        case ActionType.MEN_GET_DATA:
            return {
                ...state,
                menData: action.payload
            }

            case ActionType.MEN_POST_DATA :
                return {
                    ...state,
                   menData : state.menData.concat(action.payload)
                }

        default:
            return state
    }
    
}