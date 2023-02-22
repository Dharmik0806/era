import * as ActionType from "../ActionType"


export const increment = () => (dispatch) => {
    dispatch({
        type: ActionType.COUNTER_INCREMENT,
        payload: 0
    })
}

export const decrement = () => (dispatch) => {
    dispatch({
        type: ActionType.COUNTER_DECREMENT,
        payload: 0
    })
}