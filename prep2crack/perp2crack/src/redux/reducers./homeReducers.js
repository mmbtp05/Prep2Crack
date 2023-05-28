import { ACHIEVEMENT } from "../actions/homeActions";


const initialstate = {
    achievement: null
}


export const achievementReducer = (state = initialstate, action) => {
    switch (action.type) {
        case ACHIEVEMENT:
            return {
                ...state,
                achievement: action.payload
            }
        default:
            return state;
    }
}