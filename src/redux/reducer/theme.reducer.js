import { caES } from '@mui/material/locale'
import * as ActionType from '../ActionType'

export const themeReducer = (state, action) => {
    switch (action.type) {
        case ActionType.THEME_TOGGLE:
            return {
                ...state,
                themeStyle: action.payload
            }

        default:
            return state
    }
}