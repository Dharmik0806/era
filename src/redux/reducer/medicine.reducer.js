import * as ActionType from "../ActionType"

const initialstate = {
    isLoder: false,
    medicine: [],
    error: null
}

export const medicineReducer = (state = initialstate, action) => {
    // console.log("medicine reducer");
    // console.log(action);

    // console.log(state, action);
    switch (action.type) {
        case ActionType.MEDICINE_GET:
            return {
                ...state,
                medicine: action.payload
                // payload : false,
                // error : null
            }
        case ActionType.MEDICINE_ADD:
            return {
                ...state,
                medicine: state.medicine.concat(action.payload)
            }

        case ActionType.MEDICINE_UPDATE:

            let upData = state.medicine.map((m) => {
                if (m.id === action.payload.id) {
                    console.log(action.payload);
                    return action.payload
                } else {
                    return m
                }
            })

            return {
                ...state,
                medicine: upData
            }

        case ActionType.MEDICINE_DELETE:
            let delData = state.medicine.filter((m) => m.id !== action.payload)

            return {
                ...state,
                medicine: delData
            }

            // case ActionType.MEDICINE_LOADING :
            //     return{
            //         ...state,
            //         isLoder : true
            //     }

        default:
            return state
    }
}