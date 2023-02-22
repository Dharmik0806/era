import * as ActionType from "../ActionType"

const initialstate = {
    count: 0
}
export const counterReducer = (state = initialstate, action) => {
    switch (action.type) {
        case ActionType.COUNTER_INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }

        case ActionType.COUNTER_DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }

        default:
            return state
    }
}