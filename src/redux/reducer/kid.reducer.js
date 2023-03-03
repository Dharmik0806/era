import * as ActionType from "../ActionType"

const initialState = {
    isLoder: false,
    kid: [],
    error: null
}

export const kidReducer = (state = initialState, action) => {
    // console.log(action.payload, state);
    switch (action.type) {
        case ActionType.KID_GET_DATA:
            return {
                ...state,
                kid: action.payload,
                isLoder : false,
                error : null
            }

        case ActionType.KID_POST_DATA:
            return {
                ...state,
                kid: state.kid.concat(action.payload)
            }

        case ActionType.KID_PUT_DATA:

            let finPutData = state.kid.map((d) => {
                if (d.id === action.payload) {
                    return action.payload
                } else {
                    return d
                }
            })

            console.log(finPutData);

            return {
                ...state,
                kid: finPutData
            }

            case ActionType.KID_DELETE_DATA : 

            let finDelData = state.kid.filter((d) => d.id !== action.payload)
            return{
                ...state,
                kid : finDelData
            }

            case ActionType.KID_LOADING_DATA :
                return{
                    ...state,
                    isLoder : true
                }

                case ActionType.KID_ERRORE_DATA :
                    return{
                        ...state,
                        isLoder : false,
                        error : action.payload
                    }
        default:
            return state

    }
}